import { NextRequest, NextResponse } from 'next/server'

const MARKDOWN_ROUTES: Record<string, string> = {
  '/': '/index.md',
  '/mitglied-werden': '/mitglied-werden/index.md',
  '/spenden': '/spenden/index.md',
  '/kontakt': '/kontakt/index.md',
  '/datenschutz-bestimmungen': '/datenschutz-bestimmungen/index.md',
}

function clientPrefersMarkdown(accept: string | null): boolean {
  if (!accept) return false
  const tokens = accept.split(',').map((part) => part.trim().toLowerCase())
  return tokens.some((token) => token === 'text/markdown' || token.startsWith('text/markdown;'))
}

function appendVaryAccept(response: NextResponse) {
  const existing = response.headers.get('Vary')
  if (!existing) {
    response.headers.set('Vary', 'Accept')
    return
  }
  const tokens = existing
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (!tokens.some((t) => t.toLowerCase() === 'accept')) {
    tokens.push('Accept')
    response.headers.set('Vary', tokens.join(', '))
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.endsWith('.md')) {
    const response = NextResponse.next()
    appendVaryAccept(response)
    return response
  }

  const target = MARKDOWN_ROUTES[pathname]
  if (!target) {
    const response = NextResponse.next()
    appendVaryAccept(response)
    return response
  }

  if (!clientPrefersMarkdown(request.headers.get('accept'))) {
    const response = NextResponse.next()
    appendVaryAccept(response)
    return response
  }

  const rewriteUrl = request.nextUrl.clone()
  rewriteUrl.pathname = target
  const response = NextResponse.rewrite(rewriteUrl)
  appendVaryAccept(response)
  response.headers.set('Content-Type', 'text/markdown; charset=utf-8')
  return response
}

export const config = {
  matcher: ['/((?!_next/|api/|.*\\..*).*)', '/:path*.md'],
}

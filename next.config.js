/** @type {import('next').NextConfig} */

const SITE_URL = 'https://foerderverein-kita-johanna.de'

const RFC8288_LINK = [
  `<${SITE_URL}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
  `<${SITE_URL}/llms.txt>; rel="describedby"; type="text/plain"`,
  `<${SITE_URL}/llms-full.txt>; rel="describedby"; type="text/plain"`,
  `<${SITE_URL}/index.md>; rel="alternate"; type="text/markdown"; hreflang="de"`,
].join(', ')

const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
          {
            key: 'Link',
            value: RFC8288_LINK,
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/agents.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/:path*.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ]
  },
}

module.exports = nextConfig

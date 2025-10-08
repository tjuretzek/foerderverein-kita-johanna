import { createCanvas } from 'canvas'
import fs from 'fs'
import path from 'path'
import QRCode from 'qrcode'
import { rallyStations } from '../src/data/rallyStations'

const BASE_URL = 'https://foerderverein-kita-johanna.de'
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'qr-codes', 'rallye')

async function generateQRCodeWithTitle(url: string, title: string, filePath: string) {
  // QR-Code Größe
  const qrSize = 1024
  const margin = 2

  // Text-Einstellungen
  const fontSize = 46
  const textPadding = 0 // Abstand zwischen QR-Code und Text
  const textBottomMargin = 10 // Abstand unter dem Text
  const lineHeight = fontSize * 1.2 // Zeilenhöhe für mehrzeiligen Text

  // Erstelle QR-Code als Data URL
  const qrDataUrl = await QRCode.toDataURL(url, {
    width: qrSize,
    margin: margin,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
  })

  // Lade QR-Code als Bild
  const { Image } = await import('canvas')
  const qrImage = new Image()
  qrImage.src = qrDataUrl

  // Erstelle temporären Canvas um Text-Breite zu messen
  const tempCanvas = createCanvas(100, 100)
  const tempCtx = tempCanvas.getContext('2d')
  tempCtx.font = `900 ${fontSize}px Arial Black, Arial, sans-serif`

  // Teile Text in mehrere Zeilen, wenn nötig
  const maxWidth = qrSize
  const words = title.split(' ')
  const lines: string[] = []
  let currentLine = words[0]

  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + ' ' + words[i]
    const metrics = tempCtx.measureText(testLine)

    if (metrics.width > maxWidth) {
      lines.push(currentLine)
      currentLine = words[i]
    } else {
      currentLine = testLine
    }
  }
  lines.push(currentLine)

  // Berechne Canvas-Höhe basierend auf QR-Code + Text (mit mehreren Zeilen)
  const textHeight = lines.length * lineHeight
  const canvasWidth = qrSize
  const canvasHeight = qrSize + textPadding + textHeight + textBottomMargin

  // Erstelle Canvas
  const canvas = createCanvas(canvasWidth, canvasHeight)
  const ctx = canvas.getContext('2d')

  // Weißer Hintergrund
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)

  // Zeichne QR-Code
  ctx.drawImage(qrImage, 0, 0, qrSize, qrSize)

  // Text-Einstellungen
  ctx.fillStyle = '#000000'
  ctx.font = `900 ${fontSize}px Arial Black, Arial, sans-serif`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'

  // Zeichne jede Zeile des Texts
  const textX = 50
  let textY = qrSize - 25

  for (const line of lines) {
    ctx.fillText(line, textX, textY)
    textY += lineHeight
  }

  // Speichere als PNG
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(filePath, buffer)
}

async function generateQRCodes() {
  // Erstelle Output-Verzeichnis, falls es nicht existiert
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  console.log('🔄 Generiere QR-Codes mit Titeln für alle Rally-Stationen...\n')

  for (const station of rallyStations) {
    const url = `${BASE_URL}/rallye/${station.slug}`
    const fileName = `${station.slug}.png`
    const filePath = path.join(OUTPUT_DIR, fileName)
    const title = station.name

    try {
      await generateQRCodeWithTitle(url, title, filePath)

      console.log(`✅ Station ${station.number}: ${station.name}`)
      console.log(`   URL: ${url}`)
      console.log(`   Datei: ${fileName}\n`)
    } catch (error) {
      console.error(`❌ Fehler bei Station ${station.number}:`, error)
    }
  }

  console.log('✨ QR-Code-Generierung abgeschlossen!')
  console.log(`📂 Alle QR-Codes wurden in ${OUTPUT_DIR} gespeichert`)
}

generateQRCodes()

import fs from 'fs'
import path from 'path'
import QRCode from 'qrcode'
import { rallyStations } from '../src/data/rallyStations'

const BASE_URL = 'https://foerderverein-kita-johanna.de'
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'qr-codes', 'rallye')

async function generateQRCodes() {
  // Erstelle Output-Verzeichnis, falls es nicht existiert
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  console.log('🔄 Generiere QR-Codes für alle Rally-Stationen...\n')

  for (const station of rallyStations) {
    const url = `${BASE_URL}/rallye/${station.slug}`
    const fileName = `${station.slug}.png`
    const filePath = path.join(OUTPUT_DIR, fileName)

    try {
      await QRCode.toFile(filePath, url, {
        width: 1024,
        margin: 2,
        color: {
          dark: '#000000', // Schwarz
          light: '#FFFFFF', // Weiß
        },
      })

      console.log(`✅ Station ${station.number}: ${station.name}`)
      console.log(`   URL: ${url}`)
      console.log(`   Datei: ${fileName}\n`)
    } catch (error) {
      console.error(`❌ Fehler bei Station ${station.number}:`, error)
    }
  }

  // Generiere auch QR-Code für die Übersichtsseite
  const overviewUrl = `${BASE_URL}/rallye/overview`
  const overviewFileName = 'overview.png'
  const overviewFilePath = path.join(OUTPUT_DIR, overviewFileName)

  try {
    await QRCode.toFile(overviewFilePath, overviewUrl, {
      width: 1024,
      margin: 2,
      color: {
        dark: '#000000', // Schwarz
        light: '#FFFFFF', // Weiß
      },
    })

    console.log(`✅ Übersichtsseite`)
    console.log(`   URL: ${overviewUrl}`)
    console.log(`   Datei: ${overviewFileName}\n`)
  } catch (error) {
    console.error(`❌ Fehler bei Übersichtsseite:`, error)
  }

  console.log('✨ QR-Code-Generierung abgeschlossen!')
  console.log(`📂 Alle QR-Codes wurden in ${OUTPUT_DIR} gespeichert`)
}

generateQRCodes()

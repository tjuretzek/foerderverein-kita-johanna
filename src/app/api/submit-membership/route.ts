import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // For debugging
    console.log('Email config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
    })

    // Create a transporter using your email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Required for some configurations
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    })

    // Verify connection configuration
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification error:', verifyError)
      // Continue attempt to send anyway
    }

    // Set up email data with new table-based format
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: formData.email,
      subject: 'Neuer Mitgliedsantrag von ' + formData.firstname + ' ' + formData.lastname,
      html: `
        <div>
          <p><strong>Neuer Mitgliedsantrag</strong></p>
          <table style="border-collapse:collapse;width:100%;height:211px" border="1">
            <colgroup>
              <col style="width:12%">
              <col style="width:88%">
            </colgroup>
            <tbody>
              <tr style="height:35px">
                <td>Vorname</td>
                <td>${formData.firstname}</td>
              </tr>
              <tr style="height:35px">
                <td>Nachname</td>
                <td>${formData.lastname}</td>
              </tr>
              <tr style="height:35px">
                <td>Straße und Hausnummer</td>
                <td>${formData.street} ${formData.number}</td>
              </tr>
              <tr style="height:35px">
                <td>Wohnort</td>
                <td>${formData.zip} ${formData.city}</td>
              </tr>
              <tr style="height:35px">
                <td>Telefonnummer</td>
                <td>${formData.telephone}</td>
              </tr>
              <tr style="height:35px">
                <td>E-Mail-Adresse</td>
                <td><a href="mailto:${formData.email}" target="_blank">${formData.email}</a></td>
              </tr>
            </tbody>
          </table>
          
          <div>&nbsp;</div>
          <div>&#10004; Datenschutzerklärung wurde akzeptiert</div>
          <div>&nbsp;</div>
          
          <p><strong>SEPA-Lastschriftmandat</strong></p>
          <table style="border-collapse:collapse;width:100%;height:163px" border="1">
            <colgroup>
              <col style="width:12%">
              <col style="width:88%">
            </colgroup>
            <tbody>
              <tr style="height:40px">
                <td>Name des Kontoinhabers</td>
                <td>${formData.bankAccountOwner}</td>
              </tr>
              <tr style="height:40px">
                <td>Kreditinstitut</td>
                <td>${formData.bank}</td>
              </tr>
              <tr style="height:40px">
                <td>IBAN</td>
                <td>${formData.iban}</td>
              </tr>
              <tr style="height:40px">
                <td>BIC</td>
                <td>${formData.bic}</td>
              </tr>
            </tbody>
          </table>
          
          <p>&#10004; Lastschriftmandat wurde erteilt</p>
        </div>
      `,
    }

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions)
      console.log('Email sent successfully:', info.messageId)
      return NextResponse.json({ success: true })
    } catch (sendError: any) {
      console.error('Error sending email details:', {
        message: sendError.message,
        stack: sendError.stack,
        code: sendError.code,
        command: sendError.command,
      })
      return NextResponse.json(
        {
          success: false,
          error: `Email sending failed: ${sendError.message}`,
        },
        { status: 500 },
      )
    }
  } catch (error: any) {
    console.error('General error:', error)
    return NextResponse.json(
      {
        success: false,
        error: `Server error: ${error.message || 'Unknown error'}`,
      },
      { status: 500 },
    )
  }
}

const nodemailer = require('nodemailer')

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.fr',
  port: 465,
  secure: true,
  auth: {
    user: process.env.IONOS_MAIL_USER,
    pass: process.env.IONOS_MAIL_PASSWORD
  }
})

// Fonction pour envoyer un e-mail
const contactForm = async (name, email, subject, message) => {
  try {
    // Options de l'e-mail
    const mailOptions = {
      from: 'contact@gaetanredoutez.fr',
      to: 'contact@gaetanredoutez.fr',
      subject: subject,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    }
    console.log(mailOptions)

    // Envoi de l'e-mail
    const info = await transporter.sendMail(mailOptions)
    console.log('Email envoyé: ' + info.response)
    return true
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'envoi de l'e-mail :",
      error
    )
    throw new Error("Une erreur est survenue lors de l'envoi de l'e-mail.")
  }
}

module.exports = { contactForm }

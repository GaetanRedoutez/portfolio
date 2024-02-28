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
    contactConfirm(name, email, subject, message)
    return true
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'envoi de l'e-mail :",
      error
    )
    throw new Error("Une erreur est survenue lors de l'envoi de l'e-mail.")
  }
}

const contactConfirm = async (name, email, subject, message) => {
  try {
    // Options de l'e-mail
    const mailOptions = {
      from: 'contact@gaetanredoutez.fr',
      to: email,
      subject: 'Confirmation de votre prise de contact : ' + subject,
      text: `Bonjour,\n\nJe vous confirme la réception de votre message. Merci de m'avoir contacté.\n\nJe vais examiner votre message attentivement et je vous reviendrai vers vous sous 48h.\n\nBien cordialement,\nGaëtan Redoutez`
    }
    console.log(mailOptions)

    // Envoi de l'e-mail
    const info = await transporter.sendMail(mailOptions)
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

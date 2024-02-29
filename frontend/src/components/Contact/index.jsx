import { useEffect, useState } from 'react'
import { postContact } from '../../../utils/api'

function Contact() {
  const [contactResponse, setContactResponse] = useState(undefined)
  const [displayMessage, setDisplayMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const formDataObj = {}
    formData.forEach((value, key) => (formDataObj[key] = value))
    try {
      const response = await postContact(formDataObj)

      e.target.reset()

      setContactResponse(response)
    } catch (error) {
      setContactResponse(false)
      console.error(error)
    }
  }

  useEffect(() => {
    if (contactResponse) {
      setDisplayMessage('Votre message a été envoyé avec succès !')
    } else {
      setDisplayMessage(
        "Une erreur est survenue lors de l'envoi de l'e-mail. Contacter : contact@gaetanredoutez.fr"
      )
    }
  }, [contactResponse])
  return (
    <div className="background-secondary py-5" id="contact" data-spy>
      <div className="container">
        <h2 className="m-3">Contact</h2>
        <form onSubmit={handleSubmit} id="contact-form">
          <div className="form-group m-3">
            <div className="contact-info">
              <div className="container contact-info--name">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="container contact-info--email">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group m-3">
            <label htmlFor="subject">Objet</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Objet"
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="message">Votre message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Votre message"
              rows={10}
              required
            />
          </div>
          {contactResponse !== undefined ? (
            <div className="form-group mx-3 form-response border py-2">
              {displayMessage}
            </div>
          ) : null}
          <button type="submit" className="btn btn-primary m-3">
            Envoyer votre message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

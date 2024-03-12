import { useEffect, useState } from 'react'
import { postContact } from '../../../utils/api'

/**
 * Contact component to display contact form and handle form submission
 * @returns {JSX.Element} - JSX element representing contact form
 */
function Contact() {
  // State variables to manage contact form submission and display response message
  const [contactResponse, setContactResponse] = useState(undefined)
  const [displayMessage, setDisplayMessage] = useState('')

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Creating FormData object from form data
    const formData = new FormData(e.target)

    // Converting FormData object to plain JavaScript object
    const formDataObj = {}
    formData.forEach((value, key) => (formDataObj[key] = value))

    try {
      // Sending form data to server using postContact function
      const response = await postContact(formDataObj)

      // Resetting form fields on successful submission
      e.target.reset()

      // Setting response from server
      setContactResponse(response)
    } catch (error) {
      // Handling error if submission fails
      setContactResponse(false)
      console.error(error)
    }
  }

  // Effect hook to update display message based on contactResponse state
  useEffect(() => {
    if (contactResponse) {
      // Displaying success message if contactResponse is truthy
      setDisplayMessage('Votre message a été envoyé avec succès !')
    } else {
      // Displaying error message if contactResponse is falsy
      setDisplayMessage(
        "Une erreur est survenue lors de l'envoi de l'e-mail. Contacter : contact@gaetanredoutez.fr"
      )
    }
  }, [contactResponse])

  return (
    <section className="background-secondary py-5" id="contact">
      <div className="container">
        <h2 className="m-3">Contact</h2>

        {/* Contact form */}
        <form onSubmit={handleSubmit} id="contact-form">
          <div className="form-group m-3">
            <div className="contact-info">
              {/* Name input */}
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

              {/* Email input */}
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

          {/* Subject input */}
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

          {/* Message input */}
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

          {/* Displaying response message */}
          {contactResponse !== undefined ? (
            <div className="form-group mx-3 form-response border py-2">
              {displayMessage}
            </div>
          ) : null}

          {/* Submit button */}
          <button type="submit" className="btn btn-primary m-3">
            Envoyer votre message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

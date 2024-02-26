function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      "Oups, je n'ai pas terminé 😭\n\nEn attendant, envoie-moi un email à redoutezgaetan@gmail.com"
    )
  }
  return (
    <div className="background-primary py-5" id="contact">
      <div className="container">
        <h2 className="m-3">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group m-3">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Votre email"
              autoComplete="email"
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="text">Votre message</label>
            <textarea
              className="form-control"
              id="text"
              placeholder="Votre message"
              rows={10}
            />
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Envoyer votre message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

function LoginForm() {
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
      // const response = await postContact(formDataObj)

      // Resetting form fields on successful submission
      e.target.reset()

      // Setting response from server
      // setContactResponse(response)
    } catch (error) {
      // Handling error if submission fails
      // setContactResponse(false)
      console.error(error)
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container loginForm"
        id="loginForm"
      >
        {/* Email input */}
        <div className="loginForm-email">
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

        {/* Subject input */}
        <div className="loginForm-pwd">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Mot de passe"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary m-3">
          Se connecter
        </button>
      </form>
    </>
  )
}

export default LoginForm

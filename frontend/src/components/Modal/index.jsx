import PropTypes from 'prop-types'

function Modal({ closeModal, title, content }) {
  const handleBackgroundClick = (e) => {
    if (e.target.getAttribute('rel') === 'js-modal-background') {
      closeModal()
    }
  }
  return (
    <div
      className="modal"
      rel="js-modal-background"
      onClick={handleBackgroundClick}
    >
      <div className="modal-container" rel="js-modal-container">
        <div className="modal-container--titlebar">
          <h2 className="modal-container--titlebar_title">{title}</h2>
          <button
            className="modal-container--titlebar_close"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className="modal-container--body">{content}</div>
      </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  closeModal: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

function scrollSpy() {
  const sections = document.querySelectorAll('section')

  let sectionOffsets = {}

  sections.forEach((section) => {
    console.log(section.id)
    sectionOffsets[section.id] = section.offsetTop - 100
  })

  window.addEventListener('scroll', function () {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop

    for (let sectionId in sectionOffsets) {
      if (sectionOffsets[sectionId] <= scrollPosition) {
        const activeLink = document.querySelector('.active')
        if (activeLink) {
          activeLink.classList.remove('active')
        }

        const targetLink = document.querySelector(`a[href*="${sectionId}"]`)
        if (targetLink) {
          targetLink.classList.add('active')
        }
      }
    }
  })
}

export default scrollSpy

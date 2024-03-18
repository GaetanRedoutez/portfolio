import { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import {
  getExperiences,
  getFormations,
  getHardSkills,
  getHobbies,
  getLanguages,
  getSoftSkills
} from '../../../utils/api'
import Header from '../../components/Header'

/**
 * Resume component to render the resume page
 * Fetches data for hard skills, experiences, formations, soft skills, languages, and hobbies from API
 * @returns {JSX.Element} - JSX element representing the resume page
 */
function Resume() {
  // State variable to store resume data
  const [hardSkillData, setHardSkillData] = useState([])
  const [experiencesData, setExperiencesData] = useState([])
  const [formationsData, setFormationsData] = useState([])
  const [languagesData, setLanguagesData] = useState([])
  const [softSkillData, setSoftSkillData] = useState([])
  const [hobbyData, setHobbyData] = useState([])

  // Effect hook to fetch resume data
  useEffect(() => {
    // Fetch hard skills data from API
    const fetchHardSkill = async () => {
      try {
        const response = await getHardSkills()
        setHardSkillData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchHardSkill()

    // Fetch experiences data from API
    const fetchExperiences = async () => {
      try {
        const response = await getExperiences()
        setExperiencesData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExperiences()

    // Fetch formations data from API
    const fetchFormations = async () => {
      try {
        const response = await getFormations()
        setFormationsData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchFormations()

    // Fetch languages data from API
    const fetchLanguages = async () => {
      try {
        const response = await getLanguages()
        setLanguagesData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchLanguages()

    // Fetch soft skills data from API
    const fetchSoftSkills = async () => {
      try {
        const response = await getSoftSkills()
        setSoftSkillData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSoftSkills()

    // Fetch hobbies data from API
    const fetchHobby = async () => {
      try {
        const response = await getHobbies()
        setHobbyData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchHobby()
  }, []) // Runs only once after the component mounts

  // Mapping over the array of hard skills data to generate JSX elements
  const hardSkill = hardSkillData.map((element, key) => (
    // Each element is wrapped in a list item with a unique key
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> : {element.details}
      </div>
    </li>
  ))

  // Mapping over the array of experiences data to generate JSX elements
  const experience = experiencesData.map((element, key) => (
    // Each element is wrapped in a list item with a unique key
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> @ {element.society}
      </div>
    </li>
  ))

  // Mapping over the array of formations data to generate JSX elements
  const formation = formationsData.map((element, key) => (
    // Each element is wrapped in a list item with a unique key
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> @ {element.school}
      </div>
    </li>
  ))

  // Mapping over the array of soft skills data to generate JSX elements
  const softSkill = softSkillData.map((element, key) => (
    // Each element is wrapped in a list item with a unique key
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong>
      </div>
    </li>
  ))

  // Mapping over the array of languages data to generate JSX elements
  const langue = languagesData.map((element, key) => (
    // Each element is wrapped in a list item with a unique key
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> - {element.level}
      </div>
    </li>
  ))

  // Mapping over the array of hobbies data to generate JSX elements
  const hobby = hobbyData.map((element, key) => (
    // Each element is wrapped in a list item with a unique key
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong>
      </div>
    </li>
  ))

  return (
    <>
      {/* Header component */}
      <Header />

      <div>
        <div className="container">
          {/* Title for the resume page */}
          <h2 className="d-flex justify-content-center m-5">Mon CV</h2>

          {/* Dropdown components for displaying different sections */}
          <Dropdown title={'Hard Skill'} content={hardSkill} />
          <Dropdown title={'Experience'} content={experience} />
          <Dropdown title={'Formation'} content={formation} />
          <Dropdown title={'Soft Skill'} content={softSkill} />
          <Dropdown title={'Langue'} content={langue} />
          <Dropdown title={'Hobbies'} content={hobby} />
        </div>

        {/* Link to download the resume */}
        <div className="container">
          <p className="h2 d-flex justify-content-center mt-5">
            Pour le télécharger c{"'"}est ici :{' '}
          </p>
          <div className=" d-flex justify-content-center flex-column align-items-center mb-5 ">
            <small>Cliquer ou flasher, c{"'"}est vous qui voyez ! </small>
            <a
              href="assets\pdf\CV-Redoutez-Gaetan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="assets/images/qrcode.png"
                alt="Télécharger mon CV"
                width="200"
                height="200"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume

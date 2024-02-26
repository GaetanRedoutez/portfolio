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

function Resume() {
  const [hardSkillData, setHardSkillData] = useState([])
  const [experiencesData, setExperiencesData] = useState([])
  const [formationsData, setFormationsData] = useState([])
  const [languagesData, setLanguagesData] = useState([])
  const [softSkillData, setSoftSkillData] = useState([])
  const [hobbyData, setHobbyData] = useState([])

  useEffect(() => {
    const fetchHardSkill = async () => {
      try {
        const response = await getHardSkills()
        setHardSkillData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchHardSkill()

    const fetchExperiences = async () => {
      try {
        const response = await getExperiences()
        setExperiencesData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExperiences()

    const fetchFormations = async () => {
      try {
        const response = await getFormations()
        setFormationsData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchFormations()

    const fetchLanguages = async () => {
      try {
        const response = await getLanguages()
        setLanguagesData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchLanguages()

    const fetchSoftSkills = async () => {
      try {
        const response = await getSoftSkills()
        setSoftSkillData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSoftSkills()

    const fetchHobby = async () => {
      try {
        const response = await getHobbies()
        setHobbyData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchHobby()
  }, [])

  const hardSkill = hardSkillData.map((element, key) => (
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> : {element.details}
      </div>
    </li>
  ))

  const experience = experiencesData.map((element, key) => (
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> @ {element.society}
      </div>
    </li>
  ))

  const formation = formationsData.map((element, key) => (
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> @ {element.school}
      </div>
    </li>
  ))

  const softSkill = softSkillData.map((element, key) => (
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong>
      </div>
    </li>
  ))

  const langue = languagesData.map((element, key) => (
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong> - {element.level}
      </div>
    </li>
  ))

  const hobby = hobbyData.map((element, key) => (
    <li key={Date.now() + key}>
      <div>
        <strong>{element.name}</strong>
      </div>
    </li>
  ))

  return (
    <>
      <Header isHome={false} />
      <div>
        <div className="container">
          <h2 className="d-flex justify-content-center m-5">Mon CV</h2>
          <Dropdown title={'Hard Skill'} content={hardSkill} />
          <Dropdown title={'Experience'} content={experience} />
          <Dropdown title={'Formation'} content={formation} />
          <Dropdown title={'Soft Skill'} content={softSkill} />
          <Dropdown title={'Langue'} content={langue} />
          <Dropdown title={'Hobbies'} content={hobby} />
        </div>
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
                alt=""
                width={200}
                height={200}
              />
            </a>
            <p className="text-danger">Le QR code n{"'"}est pas fonctionnel</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume

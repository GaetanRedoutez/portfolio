import { resumeData } from '../../../data/data'
import Dropdown from '../../components/Dropdown'

function Cv() {
  const hardSkill = (
    <ul>
      {resumeData.Hard_Skill.map((element, key) => (
        <li key={Date.now() + key}>
          <p>
            <strong>{element.name}</strong> : {element.details}
          </p>
        </li>
      ))}
    </ul>
  )

  const experience = (
    <ul>
      {resumeData.Experience.map((element, key) => (
        <li key={Date.now() + key}>
          <p>
            <strong>{element.name}</strong> @ {element.society}
          </p>
        </li>
      ))}
    </ul>
  )

  const formation = (
    <ul>
      {resumeData.Formation.map((element, key) => (
        <li key={Date.now() + key}>
          <p>
            <strong>{element.name}</strong> @ {element.school}
          </p>
        </li>
      ))}
    </ul>
  )

  const softSkill = (
    <ul>
      {resumeData.Soft_Skill.map((element, key) => (
        <li key={Date.now() + key}>
          <p>
            <strong>{element}</strong>
          </p>
        </li>
      ))}
    </ul>
  )

  const langue = (
    <ul>
      {resumeData.Langue.map((element, key) => (
        <li key={Date.now() + key}>
          <p>
            <strong>{element.name}</strong> - {element.level}
          </p>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="container">
      <Dropdown title={'Hard Skill'} content={hardSkill} />
      <Dropdown title={'Experience'} content={experience} />
      <Dropdown title={'Formation'} content={formation} />
      <Dropdown title={'Soft Skill'} content={softSkill} />
      <Dropdown title={'Langue'} content={langue} />
    </div>
  )
}

export default Cv

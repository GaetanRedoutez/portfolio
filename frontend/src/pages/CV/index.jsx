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
    <>
      <div>
        <div className="container">
          <h2 className="d-flex justify-content-center m-5">Mon CV</h2>
          <Dropdown title={'Hard Skill'} content={hardSkill} />
          <Dropdown title={'Experience'} content={experience} />
          <Dropdown title={'Formation'} content={formation} />
          <Dropdown title={'Soft Skill'} content={softSkill} />
          <Dropdown title={'Langue'} content={langue} />
        </div>
        <div className="container">
          <p className="h2 d-flex justify-content-center mt-5">
            Pour le télécharger c'est ici :{' '}
          </p>
          <p className=" d-flex justify-content-center flex-column align-items-center mb-5 ">
            <small>Cliquer ou flasher, c'est vous qui voyez ! </small>
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
            <p className="text-danger">Le QR code n'est pas fonctionnel</p>
          </p>
        </div>
      </div>
    </>
  )
}

export default Cv

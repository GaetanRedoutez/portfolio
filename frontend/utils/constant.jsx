import Resume from '../src/pages/Resume'
import Error from '../src/pages/Error'
import Home from '../src/pages/Home'

export const APP_ROUTES = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '*',
    element: <Error />
  }
]

const BASE_URL = 'http://localhost:4000/api/v1'

export const API_ROUTES = {
  GET_SKILLS: `${BASE_URL}/skills`,
  GET_PROJECTS: `${BASE_URL}/projects`,
  GET_HARDSKILLS: `${BASE_URL}/hard-skill`,
  GET_EXPERIENCES: `${BASE_URL}/experience`,
  GET_FORMATIONS: `${BASE_URL}/formation`,
  GET_LANGUAGES: `${BASE_URL}/language`,
  GET_SOFTSKILLS: `${BASE_URL}/soft-skill`,
  GET_HOBBIES: `${BASE_URL}/hobby`
}

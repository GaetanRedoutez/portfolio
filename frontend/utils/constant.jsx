import Resume from '../src/pages/Resume'
import Error from '../src/pages/Error'
import Home from '../src/pages/Home'
import Admin from '../src/pages/Admin'

// Define application routes
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
    path: '/admin',
    element: <Admin />
  },
  {
    path: '*',
    element: <Error />
  }
]

// Retrieve base URL from environment variables
const BASE_URL = import.meta.env.VITE_BASE_URL

// Define API routes using the base URL
export const API_ROUTES = {
  GET_SKILLS: `${BASE_URL}/skills`,
  GET_PROJECTS: `${BASE_URL}/projects`,
  GET_HARDSKILLS: `${BASE_URL}/hard-skill`,
  GET_EXPERIENCES: `${BASE_URL}/experience`,
  GET_FORMATIONS: `${BASE_URL}/formation`,
  GET_LANGUAGES: `${BASE_URL}/language`,
  GET_SOFTSKILLS: `${BASE_URL}/soft-skill`,
  GET_HOBBIES: `${BASE_URL}/hobby`,

  POST_CONTACT: `${BASE_URL}/contact`
}

import Cv from '../src/pages/CV'
import Error from '../src/pages/Error'
import Home from '../src/pages/Home'

export const APP_ROUTES = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cv',
    element: <Cv />
  },
  {
    path: '*',
    element: <Error />
  }
]

const BASE_URL = 'http://localhost:4000/api/v1'

export const API_ROUTES = {
  GET_SKILLS: `${BASE_URL}/skills`,
  GET_PROJECTS: `${BASE_URL}/projects`
}

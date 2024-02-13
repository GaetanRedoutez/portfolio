import Cv from '../src/pages/CV'
import Error from '../src/pages/Error'
import Home from '../src/pages/Home'
import Projects from '../src/pages/Projects'

export const APP_ROUTES = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
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

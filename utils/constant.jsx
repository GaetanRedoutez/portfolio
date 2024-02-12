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
    path: '*',
    element: <Error />
  }
]

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

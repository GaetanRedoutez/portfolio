import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { APP_ROUTES } from '../../utils/constant.jsx'

import Footer from '../components/Footer/index.jsx'

const router = createBrowserRouter(APP_ROUTES)

function Root() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default Root

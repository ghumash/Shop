import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import './scss/app.scss'

const Layout = () => {
  return (
    <div className={'app'}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Product />
      },
      {
        path: '/product/:id',
        element: <Products />
      }
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App

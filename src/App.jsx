import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import {
  Home,
  Projects,
  Education,
  Experience,
  Contact
} from './pages/index'
import Layout from "./Layout"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='experience' element={<Experience />} />
        <Route path='education' element={<Education/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

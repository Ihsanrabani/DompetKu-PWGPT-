import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Pages
import Home from "./pages/homePage/Home"
import History from "./pages/historyPage/History"

library.add(faXmark)

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/histori",
    element:<History/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

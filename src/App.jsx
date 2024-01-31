import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Programs from "./Pages/Programs"
import Contact from "./Pages/Contact"

function App() {
  const pageRoutes = [
    { path: "/", element: <Home /> },
    { path: "/pages/about", element: <About /> },
    { path: "/pages/programs", element: <Programs /> },
    { path: "/pages/contact", element: <Contact /> },
  ]

  const renderedRoutes = pageRoutes.map((page, index) => {
    return <Route path={page.path} element={page.element} key={index} />
  })
  return (
    <>
      <Router>
        <div className=" text-center">786</div>
        <Routes>{renderedRoutes}</Routes>
      </Router>
    </>
  )
}

export default App

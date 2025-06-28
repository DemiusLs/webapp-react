import { BrowserRouter, Route, Routes } from "react-router-dom"
import GuestLayout from "../Layouts/GuestLayout"
import Home from "../pages/Home"
import MoviesPage from "../pages/MoviesPage"
import SingleMoviePage from "../pages/SingleMoviePage"
import "bootstrap/dist/css/bootstrap.min.css"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<SingleMoviePage />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import GuestLayout from "../Layouts/GuestLayout"
import Home from "../pages/Home"
import MoviesPage from "../pages/MoviesPage"
import SingleMoviePage from "../pages/SingleMoviePage"
import CreateBook from "../pages/CreateBook"




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path=":slug" element={<SingleMoviePage />} />
              <Route path="create" element={<CreateBook />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

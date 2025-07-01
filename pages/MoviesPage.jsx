import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";

const MoviesPage = () => {



    const [moviesArr, setMoviesArr] = useState(null)
    const [searchTxt, setSearchTxt] = useState("")


    const getMovies = () => {

        const params = {};

        if (searchTxt) {
            params.search = searchTxt
        }

        console.log(params)

        axios.get(`${import.meta.env.VITE_API_URL}/movies`, {
            params,
        })
            .then((resp) => {

                console.log(resp.data)

                setMoviesArr(resp.data)
            });
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        getMovies();



    }



    useEffect(() => {
        getMovies();

    }, [])








    return (
        <main>
            <h1 className="text-center py-3"> Benvenuti nella MoviesPage </h1>


            <div className="container">

                <form className="d-flex justify-content-center py-3" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" value={searchTxt} onChange={(event) => setSearchTxt(event.target.value)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="row row-cols-3  row-cols-l-3 row-cols-xl-5 g-2 g-lg-3 py-4">
                    {moviesArr ? moviesArr.map((curMovie) => (

                        <div className="col" key={curMovie.id}>
                            <CardComponent movie={curMovie} />
                        </div>)) :
                        (
                            <h2>no films</h2>
                        )}




                </div>
            </div>

        </main>
    )

}

export default MoviesPage;

import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";

const MoviesPage = () => {

    const [moviesArr, setMoviesArr] = useState(null)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`)
            .then((resp) => {

                setMoviesArr(resp.data)
            })
    }


        , [])

    return (
        <main>
            <h1 className="text-center"> Benvenuti nella MoviesPage </h1>


            <section>
                <div className="container">
                    <div className="row row-cols-3  row-cols-l-3 row-cols-xl-5 g-2 g-lg-3">
                        {moviesArr ? moviesArr.map((curMovie) => (

                            <div className="col" key={curMovie.id}>
                                <CardComponent movie={curMovie} />
                            </div>)) :
                            (
                                <h2>no films</h2>
                            )}




                    </div>
                </div>
            </section>
        </main>
    )

}

export default MoviesPage;

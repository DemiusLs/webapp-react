import { useEffect, useState } from "react";
import BackButton from "../components/BackButton"
import ReviewsList from "../components/reviews/ReviewsList"

import axios from "axios";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {

    const { slug } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}/movies/${slug}`)
            .then((resp) => {
                console.log(resp.data.data)
                setMovie(resp.data.data)
                console.log(movie)
            })
    }, []);



    return (

        <main className="pb-5">

            {movie && movie.image && (
                <section>

                    <img className="banner" src={movie.image} alt="" />

                </section>
            )}




            {movie ? (

                <section className="container py-4">

                    <section className="container py-4">
                        <BackButton />
                        <h1 className="text-center my-4">
                            {movie.title} - {movie.director}
                        </h1>
                        <div className="text-center mb-4">
                            vote={movie.avg_vote}
                        </div>
                        <p className="text-center">{movie.abstract}</p>
                    </section>
                    <section className="container">
                        <h2>Recensioni</h2>
                        <ReviewsList reviews={movie.reviews} />
                    </section>

                </section>

            ) : (<h3>Caricamento</h3>)}
        </main>
    )

}

export default SingleMoviePage;

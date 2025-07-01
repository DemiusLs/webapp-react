import { useEffect, useState } from "react";
import BackButton from "../components/BackButton"
import ReviewsList from "../components/reviews/ReviewsList"
import Stars from '../components/Stars'
import ReviewForm from "../components/reviews/ReviewForm";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SingleMoviePage = () => {

    const { slug } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null)


    const getMoviesDetails = () => {



        axios.get(`${import.meta.env.VITE_API_URL}/movies/${slug}`)
            .then((resp) => {

                console.log(resp.data.data)
                setMovie(resp.data.data)
                console.log(movie)
            })
        // .catch((err) => {
        //     if (err.status === 404) {
        //         navigate("/not-found");
        //     }
        // });

    }



    useEffect(() => {

        getMoviesDetails();


    }, [slug]);





    return (

        <main className="pb-5">

            {movie && movie.image && (
                <section>

                    <img className="banner" src={movie.image} alt="" />

                </section>
            )}



            <section className="container py-4">
                {movie ? (

                    <>
                        <section className="container py-4">
                            <BackButton />
                            <h1 className="text-center my-4">
                                {movie.title} - {movie.director}
                            </h1>
                            <div className="text-center mb-4">
                                <Stars vote={movie.avg_vote} />
                            </div>
                            <p className="text-center">{movie.abstract}</p>
                        </section>
                        <section className="container">
                            <h2>Recensioni</h2>
                            <ReviewsList reviews={movie.reviews} />
                        </section>


                        <section className="container py-4">
                            <h2 className="text-center">Lascia la tua recensione</h2>

                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8 col-xl-6">
                                    <div className="card">
                                        {<ReviewForm
                                            movie_id={movie.id}
                                            reloadReviews={getMoviesDetails}

                                        />}
                                    </div>
                                </div>
                            </div>


                        </section>
                    </>





                ) : (<h3>Caricamento</h3>)}

            </section>



        </main>
    )

}

export default SingleMoviePage;

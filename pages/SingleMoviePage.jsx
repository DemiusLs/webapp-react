import { useEffect, useState } from "react";
import HorizontalCardComponent from "../components/HorizontalCardComponent";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
            .then((resp) => {
                console.log(`${import.meta.env.VITE_API_URL}/movies/${id}`)
                setMovie(resp.data.data)
            })
    }, []);



    return (
        <main>
            <h1> Benvenuti nella MoviePage </h1>

            {movie ? (<HorizontalCardComponent movie={movie} />) : (<h3>Caricamento</h3>)}
        </main>
    )

}

export default SingleMoviePage;

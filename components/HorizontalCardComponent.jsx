import { Link } from "react-router-dom";
import BackButton from "./BackButton.jsx";

const HorizontalCardComponent = ({ movie }) => {
    console.log(movie)

    const { id, title, director, abstract, image, genre, avg_vote } = movie;



    return (


        <div className="card mb-3 h-100" >
            <div className="row g-0">
                <div className="col-4">
                    <img src={image || "https://placehold.co/600x400"} className="card-img-top  " alt="..." />
                </div>

                <div className="col-8">
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{director}</p>
                        <p className="card-text">{abstract}</p>
                        <BackButton />



                    </div>
                </div>
            </div>


        </div>


    )

}

export default HorizontalCardComponent;
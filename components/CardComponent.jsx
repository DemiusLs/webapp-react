import { Link } from "react-router-dom";

const CardComponent = ({ movie }) => {

    const { id, title, director, abstract, image, genre, avg_vote } = movie;
    console.log(image)

    return (


        <div className="card h-100" >
            <img src={image || "https://placehold.co/600x400"} className="card-img-top  " alt="..." />
            <div className="card-body ">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{director}</p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
            </div>
        </div>
        


    )

}

export default CardComponent;
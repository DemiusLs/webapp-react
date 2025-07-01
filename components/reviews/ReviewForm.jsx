import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ movie_id, reloadReviews }) => {


    const emptyReview = {

        name: "",
        vote: 1,
        text: "",

    }

    const [formData, setFormData] = useState(emptyReview);


    const setFieldValue = (event) => {

        const { value, name } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })

    }


    const handleSubmit = (event) => {



        event.preventDefault();

        console.log(movie_id)

        axios.post(`${import.meta.env.VITE_API_URL}/movies/${movie_id}/reviews`, formData)
            .then((resp) => {

                console.log(resp);
                setFormData(emptyReview);
                reloadReviews();
            })






    }

    return (

        <form className="card-body" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={setFieldValue} />
            </div>

            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Vote</label>
                <select
                    className="form-select"
                    name="vote"
                    id="vote"
                    value={formData.vote}
                    onChange={setFieldValue}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>


            <div className="mb-3">
                <label htmlFor="text" className="form-label">Commento</label>
                <textarea className="form-control" id="text" name="text" value={formData.text} onChange={setFieldValue} />

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )


}

export default ReviewForm;
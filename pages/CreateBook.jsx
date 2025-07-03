import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateBook = () => {

    const navigate = useNavigate()

    const emptyMovie = {

        title: "",
        director: "",
        abstract: "",
        image: null,
    }

    const [formData, setFormData] = useState(emptyMovie);

    const setFieldValue = (event) => {

        const { value, name } = event.target

        if (name === "image") {
            const file = event.target.files[0]
            setFormData({
                ...formData,
                image: file,
            })
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })

        }


    }

    const handleFormSubmit = (event) => {

        event.preventDefault();
        console.log(formData)

        const dataToSend = new FormData();

        for (const key in formData) {

            dataToSend.append(key, formData[key]);
        }


        axios
            .post(`${import.meta.env.VITE_API_URL}/movies/`, dataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }



            }, console.log(dataToSend))
            .then((resp) => {
                console.log(resp)
                const slug = resp.data.slug;
                navigate(`/movies/${slug}`);
            })

    }




    return (

        <main className="container">
            <h1 className="text-center">Aggiungi un film </h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-xl-6">

                    <form action="" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">Titolo</label>
                            <input
                                className="form-control"
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="director">Director</label>
                            <input
                                className="form-control"
                                type="text"
                                id="director"
                                name="director"
                                value={formData.director}
                                onChange={setFieldValue}
                                required
                            />
                        </div>


                        <div className="mb-3">
                            <label className="form-label" htmlFor="image">Titolo</label>
                            <input
                                className="form-control"
                                type="file"
                                id="image"
                                name="image"
                                onChange={setFieldValue}

                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="abstract">Titolo</label>
                            <textarea
                                className="form-control"
                                type="file"
                                id="abstract"
                                name="abstract"
                                value={formData.abstract}
                                onChange={setFieldValue}

                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            Crea
                        </button>

                    </form>







                </div>

            </div >
        </main >
    )

}

export default CreateBook;
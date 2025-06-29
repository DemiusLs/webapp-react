import { useNavigate } from "react-router-dom"

const BackButton = () => {

    const navigate = useNavigate();

    const goBack = (event) => {
        event.preventDefault();
        navigate(-1);
    };

    return (
        <a className="btn btn-outline-primary" href="" onClick={goBack}>
            Go Back
        </a>
    );
}

export default BackButton;
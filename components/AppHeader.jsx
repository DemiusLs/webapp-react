import { NavLink } from "react-router-dom";

const AppHeader = () => {

    const headerLinks = [

        {
            title: "Home",
            url: "/",
        },

        {
            title: "Movies",
            url: "/movies",
        },

        {
            title: "Create",
            url: "/movies/create",
        },

    ]



    return (

        <header>


            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {headerLinks.map((curMovie, index) => (


                                <li className="nav-item" key={index}>
                                    <NavLink className="nav-link active" aria-current="page" to={curMovie.url}>{curMovie.title}</NavLink>
                                </li>)

                            )}



                        </ul>
                    </div>
                </div>
            </nav>


        </header>
    )


}

export default AppHeader;

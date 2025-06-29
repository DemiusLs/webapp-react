import axios from "axios";


const Home = () => {


    return (
        <main>

            <h1> Benvenuti nella Home </h1>

            <section>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./BannerMovies.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placehold.co/1500x400?text=Placeholer+2" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placehold.co/1500x400?text=Placeholer+3" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section>
                <h2>Consulta il nostro catalogo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ratione in accusamus repudiandae totam porro, itaque ducimus nihil sunt dignissimos voluptates corrupti? Accusamus eius beatae tenetur. Ratione qui quae dicta!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ratione in accusamus repudiandae totam porro, itaque ducimus nihil sunt dignissimos voluptates corrupti? Accusamus eius beatae tenetur. Ratione qui quae dicta!</p>

            </section>

        </main>
    )

}

export default Home;

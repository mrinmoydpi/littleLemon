import { useNavigate  } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    const reservationOnClick = () => {
        navigate("/reservations");
    };

    return (
        <section id="hero">
            <div className="container">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family-owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <button aria-label="Reserve a Table" className="btn" onClick={reservationOnClick}>
                        Reserve a Table
                    </button>
                </div>
                <figure className="hero-img">
                    <img alt="restaurant" src="/img/restaurant_food.jpg" />
                </figure>
            </div>
        </section>
    );
}

export default Hero;
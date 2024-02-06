import { useNavigate  } from "react-router-dom";
import Hero from "../Components/Hero";

function Home() {
    const navigate = useNavigate();
    const menuOnClick = () => {
        navigate("/menu");
    };
    const orderOnClick = () => {
        navigate("/orderonline");
    };

    return (
        <>
        <Hero />
        <section className="container" id="specials">
            <div className="specials-header">
                <h3 className="specials-header-text">This week's specials!</h3>
                <div className="specials-header-button">
                    <button aria-label="Online Menu" className="btn" onClick={menuOnClick}>
                        Online Menu
                    </button>
                </div>
            </div>
            <div className="special-items">
                <article className="special-item">
                    <figure className="special-item-image">
                        <img alt="item" src="/img/greek_salad.jpg" />
                    </figure>
                    <div className="special-item-content">
                        <h4 className="special-item-title">
                            Greek salad
                            <span className="special-item-price">$12.99</span>
                        </h4>
                        <p className="special-item-description">
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button aria-label="Order a delivery" className="btn-order" onClick={orderOnClick}>
                             Order a delivery
                        </button>
                    </div>
                </article>
                <article className="special-item">
                    <figure className="special-item-image">
                        <img alt="item" src="/img/bruschetta.svg" />
                    </figure>
                    <div className="special-item-content">
                        <h4 className="special-item-title">
                            Bruschetta
                            <span className="special-item-price">$5.99</span>
                        </h4>
                        <p className="special-item-description">
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <button aria-label="Order a delivery" className="btn-order" onClick={orderOnClick}>
                             Order a delivery
                        </button>
                    </div>
                </article>
                <article className="special-item">
                    <figure className="special-item-image">
                        <img alt="item" src="/img/lemon_dessert.jpg" />
                    </figure>
                    <div className="special-item-content">
                        <h4 className="special-item-title">
                            Lemon Dessert
                            <span className="special-item-price">$5.00</span>
                        </h4>
                        <p className="special-item-description">
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <button aria-label="Order a delivery" className="btn-order" onClick={orderOnClick}>
                             Order a delivery
                        </button>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
}

export default Home;
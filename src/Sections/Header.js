import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="grid-item-brand">
                    <Link to="/"><img alt="Little Lemon" src="/img/Logo.svg" /></Link>
                </div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
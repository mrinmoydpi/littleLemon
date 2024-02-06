import HamburgerIcon from "../Images/icon_hamburger_menu.svg";

function NavHamburger() {
    const handleOpen = () => {
        document.getElementById("main-nav").className="shown";
    };

    return (
        <button className="nav-hamburger" id="navmenu" onClick={handleOpen}>
            <img alt="nav" src={HamburgerIcon} />
        </button>
    );
}

export default NavHamburger;
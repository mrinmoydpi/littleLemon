function Footer() {
    const today = new Date();

    return (
        <footer>
            <section className="container">
                &copy; {today.getFullYear()} Little Lemon
            </section>
        </footer>
    );
}

export default Footer;
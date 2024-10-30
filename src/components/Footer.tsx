const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; Copyright {currentYear}</p>
            <p>Designed & Developed by Adonis Zepeda</p>
        </footer>
    );
};

export default Footer;
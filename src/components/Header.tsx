import { NavLink } from 'react-router-dom';
import '../index.css';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/images/dino.jpg" alt="Dino Logo" style={{ height: '40px', marginRight: '10px' }} />Adonis Zepeda</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {['About', 'portfolio', 'Contact', 'Resume'].map((section, index) => (
                                <NavLink
                                    key={index}
                                    className="nav-link"
                                    to={`${section === 'About' ? '/' : '/' + section.toLowerCase()}`}
                                >
                                    {section}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
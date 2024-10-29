
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../index.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Adonis Zepeda</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navabar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {['About', 'portfolio', 'Contact', 'Resume'].map(section => (
                                <li className="nav-item" key={section}>
                                    <NavLink
                                    className="nav-link"
                                    to= {`${section === 'About' ? '/' : '/' + section.toLowerCase()}`}
                                    >
                                        {section}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
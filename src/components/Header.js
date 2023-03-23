import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ms-3">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-items">
                        <Link className="nav-link" to="/entry"> 
                            Entry
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-link" to="/exit">
                            <a >Exit</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    ); 
}

export default Navbar; 


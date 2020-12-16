import {NavLink, Link} from "react-router-dom";

export default function Navbar() {
    return(
        <div className="rcb-navbar">
            <Link to="/" className="rcb-navbar__brand">{document.title}</Link>
            <ul className="rcb-navbar__links">
                <li className="rcb-navbar__item">
                    <NavLink to="/about" className="rcb-navbar__link">About</NavLink>
                </li>
                <li className="rcb-navbar__item">
                    <NavLink to="/posts" exact className="rcb-navbar__link">Blog</NavLink>
                </li>
            </ul>
        </div>
    )
}
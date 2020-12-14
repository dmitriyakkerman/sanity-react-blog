import {NavLink} from "react-router-dom";

export default function Navbar() {
    return(
        <ul className="header-navbar">
            <li className="header-navbar__item">
                <NavLink to="/" exact>Blog</NavLink>
            </li>
            <li className="header-navbar__item">
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    )
}
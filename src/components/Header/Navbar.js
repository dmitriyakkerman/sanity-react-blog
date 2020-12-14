import {NavLink} from "react-router-dom";

export default function Navbar() {
    return(
        <ul className="rcb-navbar">
            <li className="rcb-navbar__item">
                <NavLink to="/" exact>Blog</NavLink>
            </li>
            <li className="rcb-navbar__item">
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    )
}
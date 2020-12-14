import Navbar from "./Navbar";

export default function Header() {
    return(
        <header className="rcb-header">
            <a href="/" className="rcb-header__brand">Dev.io</a>
            <Navbar></Navbar>
        </header>
    )
}
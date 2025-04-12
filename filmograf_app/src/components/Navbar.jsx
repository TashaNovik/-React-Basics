import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Все фильмы</Link>
            <Link to="/saved">Избранное</Link>
        </div>
    );
}
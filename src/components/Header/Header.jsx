import { NavLink } from "react-router-dom";
import "./Header.scss";


export default function Header() {
    
    return <header className = "c-header">
        <nav>
            <NavLink to="/" className="link">HOME: Users</NavLink>
        </nav>
    </header>
}
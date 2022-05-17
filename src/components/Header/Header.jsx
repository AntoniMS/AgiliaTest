import { NavLink } from "react-router-dom";

export default function Header() {
    
    return <header>
        <nav>
            <NavLink to="/" className="link">HOME: Users</NavLink>
        </nav>
    </header>
}
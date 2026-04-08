import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a> */}

                {/* <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;
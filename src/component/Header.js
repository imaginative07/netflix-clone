import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <div className="header-container">
            <div className="container-fluid">
                <header className="row px-5 mx-5">
                    <div className="logo col-2">
                        <img src={Logo} alt="Netflix" />
                    </div>

                    <nav className="navbar-container col-7">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/tvseries">TV Series</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link to="/popular">New & Popular</Link>
                            </li>
                            <li>
                                <Link to="">My List</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="search col-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search here"
                        />
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;

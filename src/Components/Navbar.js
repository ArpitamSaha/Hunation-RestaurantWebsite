import React from 'react';
import logo from './images/Hunation(Dark).png';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark navabar-expand-lg fixed-top" style={{backgroundColor:"#06283D"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} alt="Nothing Found" style={{width:"10rem"}}/></a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{backgroundColor:"#6D8299"}}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title fw-bolder" id="offcanvasDarkNavbarLabel" style={{fontFamily:" Monoton, cursive"}}>HUNATION</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                <li className="nav-item">
                                    <a className="nav-link active fw-bold " aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" aria-current="page" href="/">About Us</a>
                                </li>
                                <li className="nav-item dropdown  fw-bold">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="/">Beverages</a></li>
                                        <li><a className="dropdown-item" href="/">Food</a></li>
                                        <li><a className="dropdown-item" href="/">Desserts</a></li>
                                        <li><a className="dropdown-item" href="/">Our Special</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" aria-current="page" href="/">Contact Us</a>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
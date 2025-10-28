import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#fff" }}>
                <div class="container">
                    <Link to='/' class="navbar-brand">
                        <img src='media/images/logo.png' style={{ width: "7rem" }} />
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/signup' class="nav-link active" aria-current="page">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' class="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/news' class="nav-link active" aria-current="page">News</Link>
                            </li>

                        </ul>

                    </div>
                    <img src='media/images/swachhbharat.png' />
                </div>
            </nav>
            <div style={{
                position: "fixed",
                top: "74px",
                width: "100%",
                backgroundColor: "#4169E1",
                zIndex: 1030,
            }}>
                <p style={{ animation: "scrollText 20s linear infinite", color: "white" }}><img src='media/images/new-star.gif' />Attention Citizens! Register your complaints quickly and easily through our digital platform. Experience hassle-free grievance submission with Digital India – your voice matters!</p>
            </div>
        </>
    );
}

export default Navbar;
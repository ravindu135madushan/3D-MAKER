import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
         
    };

    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                    <span className="logo1">3D</span>
                    <span className="logo2">MAKER</span>
                    </Link>
                    
                </div>
                <div className="links">
                    <span>3D Printing</span>
                    <span>3D Modeling</span>
                    <span>Explore</span>
                    <span>Contact Us</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Log in</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="./12345.png" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link className="link" to="myGigs"><span>Gigs</span></Link>
                                            <Link className="link" to="add"><span>Add New Gig</span></Link>
                                           
                                        </>
                                    )}
                                <Link className="link" to="orders"><span>Orders</span></Link>
                                <Link className="link" to="massages"><span>Messages</span></Link>
                                <Link className="link" to=""><span>Logout</span></Link>
                            </div>}
                        </div>
                    )}
                </div>

            </div>

            {(active || pathname !=="/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
};

export default Navbar
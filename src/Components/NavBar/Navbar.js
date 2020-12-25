import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleAdmin = () => {
        const newUser = { ...loggedInUser }
        newUser.adminLogin = true
        setLoggedInUser(newUser)
    }
    return (
        <div className="mt-2 mb-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Volunteer Network</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{ textDecoration: 'none' }} to="/">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'none' }} to="/">Blog</Link>
                        </li>
                        {loggedInUser.email &&
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to="/myTask">My Task</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link className="signInBtn bg-primary" style={{ textDecoration: 'none' }} to="/login">Sign In</Link>
                        </li>
                        {loggedInUser.email &&
                            <li className="nav-item">
                                <Link className="admin bg-dark" style={{ textDecoration: 'none' }} to="/admin" onClick={handleAdmin}>Admin</Link>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
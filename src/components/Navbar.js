import React from 'react'
import logo from '../assets/images/BRD_Logo.png'
import '../assets/js/nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Juices from './Juices'
import Shakes from './Shakes'
import Season from './Season'
import Icecreams from './Icecreams'
import Login from './Login'
import Cart from './Cart'
import Register from './Register'
import { UserAuthContextProvider } from '../context/UserAuthContext';
import { AddProducts } from './AddProducts'
// import Logout from './Logout'


const Navbar = () => {

    return (
        <Router>
            <div>
                <div className="container-fluid header-inner-bg">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg p-0">
                                <Link to="/" className="navbar-brand p-0">
                                    <img src={logo} height="150" alt="BRD Logo" className="d-line-block logo img-fluid" />
                                </Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <p className="fa fa-fw fa-bars"></p>
                                </button>
                                <div className="collapse navbar-collapse navbarSpacing mobile-menu" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Juices">Juices</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Shakes">Shakes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Season">Season Special</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Icecreams">Icecreams</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Icecreams">Orders</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to="/Icecreams">Logout</Link>
                                        </li> */}
                                    </ul>

                                    <div className="d-flex icons-margin">
                                        <div className="form-outline-searchbar">
                                            <input id="search-input" type="search" className="form-control" />
                                        </div>
                                        <div>
                                            <button id="search-button" type="button" className="btn search-icon">
                                                <i className="fa fa-fw fa-search"></i>
                                            </button>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle user-icon" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-fw fa-user"></i>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link className="dropdown-item" to="/">Login</Link></li>
                                                <li><a className="dropdown-item" href="#">Register</a></li>
                                                <li><a className="dropdown-item" href="#">Logout</a></li>
                                            </ul>
                                        </div>
                                        <div className="cart-icon">
                                            <button type="button" className="btn">
                                                <Link to="/Cart"><i className="fa fa-fw fa-shopping-cart"></i></Link>
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Juices' element={<Juices />} />
                    <Route path='/Shakes' element={<Shakes />} />
                    <Route path='/Season' element={<Season />} />
                    <Route path='/Icecreams' element={<Icecreams />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/AddProducts' element={<AddProducts />} />
                </Routes>

                <UserAuthContextProvider>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/Register' element={<Register />} />
                    </Routes>
                </UserAuthContextProvider>
            </div>
        </Router>
    )
}

export default Navbar

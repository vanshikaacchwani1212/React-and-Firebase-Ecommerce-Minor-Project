import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import {Alert } from 'react-bootstrap'
// import { useUserAuth} from '../context/UserAuthContext';

const Login = () => {
    

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    // const { logIn, googleSignIn } = useUserAuth();
    // const navigate = useNavigate();
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setError("");
    //   try {
    //     await logIn(email, password);
    //     navigate("/Home");
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };
   
    // const handleGoogleSignIn = async (e) => {
    //   e.preventDefault();
    //   try {
    //     await googleSignIn();
    //     navigate("/Home");
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    
    return (
        <section className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card card-border">
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src={require("../assets/images/loginicon.jpg")}
                                    alt="login form"
                                    className="img-fluid" style={{ borderradius: "1rem 0 0 1rem" }} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <form name="login">
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <span className="h1 fw-bold mb-0">Login Form</span>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder="Email Address"/>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="Password"/>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block">Login</button>
                                        </div>

                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="button" style={{backgroundColor: "#dd4b39"}}>Continue with Google</button>
                                        </div>

                                        {/* <Link className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#dd4b39"}} to="#!" role="button">
                                            <i className="fa fa-fw fa-google me-2"></i>Continue with Google</Link> */}

                                        <p className="mb-5 pb-lg-2 no-account text-center m-5">Don't have an account?
                                            <Link to='/Register' className="fw-bold text-body register-link">Register here</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login

import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";
import {Alert} from 'react-bootstrap';
const Register = () => {

  
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <section>
        <div className="container py-5 h-100">

          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-border" style={{ height: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={require("../assets/images/registericon.jpg")}
                      alt="register form"
                      className="img-fluid" style={{ borderradius: "1rem 0 0 1rem" }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                    {error && <Alert variant="danger">{error}</Alert>}
                      <form onSubmit={handleFormSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h2 fw-bold mb-0">Create an account</span>
                        </div>


                        <div className="form-outline mb-4">
                          <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder="Your Name" />
                          
                        </div>

                        <div className="form-outline mb-4">
                          <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                          
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                          
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block">Register</button>
                        </div>

                        <p className="mb-5 pb-lg-2 text-muted no-account text-center m-5">Have already an account?
                          <Link to="/Login" className="fw-bold text-body register-link">Login here</Link>
                        </p>
                      </form>

                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register

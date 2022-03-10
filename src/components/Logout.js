import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


const Logout = () => {

    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=".body">
      <div className="p-4 box mt-3 text-center" style={{Color:"black"}}>
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout} style={{Color:"black"}}>
          Log out
        </Button>
      </div>
    </div>
  )
}

export default Logout


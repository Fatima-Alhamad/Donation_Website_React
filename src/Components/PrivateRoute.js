import { useState } from "react"
import { Outlet,Navigate } from "react-router-dom"
function PrivateRoute() {
    const [isLoggedIn,setIsLoggedIn]=useState(()=>localStorage.getItem("isLoggedIn")==="true");
  return isLoggedIn ? <Outlet/>:<Navigate to={"/login"} replace/>
}

export default PrivateRoute

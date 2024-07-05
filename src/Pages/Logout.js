import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  });
  return <div>Logout...</div>;
}
export default Logout;
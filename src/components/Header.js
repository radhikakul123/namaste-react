import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header render");

  //if no dependency array => useEffect is called every render
  //if dependency array is empty = [] => useEffect called on initial render (just once)
  //if dependency array is (btnNameReact) => called everytime btnNameReact is updated 
  useEffect(() => {
console.log("useEffect render");
   }, [btnNameReact]);
const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "Online" : "Offline"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button
            className="login" onClick={()=>{
              btnNameReact == "Login"
              ? setbtnNameReact("Logout")
              :setbtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
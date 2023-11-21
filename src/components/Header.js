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
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img
            className="w-28"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "Online" : "Offline"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
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
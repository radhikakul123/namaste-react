import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";


const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("Header render");

  //if no dependency array => useEffect is called every render
  //if dependency array is empty = [] => useEffect called on initial render (just once)
  //if dependency array is (btnNameReact) => called everytime btnNameReact is updated 


  useEffect(() => {
// console.log("useEffect render");
   }, [btnNameReact]);
const onlineStatus = useOnlineStatus();

const { loggedInUser } = useContext(UserContext);
// console.log(loggedInUser);

const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>

            <button
            className="login" onClick={()=>{
              btnNameReact == "Login"
              ? setbtnNameReact("Logout")
              :setbtnNameReact("Login");
            }}>{btnNameReact}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>

          </ul>
        </div>
      </div>
    );
  };
  export default Header;
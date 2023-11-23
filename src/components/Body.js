import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
   /*custom Hook code*/
  // const listOfRestaurants = useListOfRestaurants();
   // const { filteredRestaurants, setFilteredRestaurants } = useListOfRestaurants();
  // const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRestaurants);

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestournt, setFilteredRestournt] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  // console.log("Body Rendered",listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
     
    // optional chaiming

    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestournt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false)
  return(
    <h1> Looks like you're offline!!! Please check your internet connection;</h1>
  );

  const {loggedInUser,setUserName} = useContext(UserContext);
console.log(loggedInUser);
  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the restournts and update the UI
              //Search text
              console.log(searchText);
              const filteredRestournt = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestournt(filteredRestournt);
          }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //Filter Logic for  rated restaurants
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setlistOfRestaurants(filteredList);
              console.log("sss".filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input
            className="border border-black p-1 ml-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          </div>
      </div>
      <div className="flex flex-wrap justify-around">
      {filteredRestournt.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}> <RestaurantCard  resdata={restaurant} /></Link>
        ))}

        {/* <RestaurantCard 
              resName="Oven Story Pizza   "
              cuisine="Pizzas, Pastas"
              /> */}
      </div>
    </div>
  );
};
export default Body;

import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// console.log(resList);

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
const [filteredRestournt, setFilteredRestournt] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async() =>{
   const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
    const json  = await data.json();
    console.log(json);
    // optional chaiming

    setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestournt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  
  return listOfRestaurants == 0 ? <Shimmer /> :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            //Filter the restournts and update the UI
            //Search text
            console.log(searchText);
            const filteredRestournt = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
            setFilteredRestournt(filteredRestournt);
          }}>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic for top rated restaurants
           const  filteredList = listOfRestaurants.filter((res) => res.info.avgRating>4);
           setlistOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestournt.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}

        {/* <RestaurantCard 
              resName="Oven Story Pizza   "
              cuisine="Pizzas, Pastas"
              /> */}
      </div>
    </div>  );
};
export default Body;

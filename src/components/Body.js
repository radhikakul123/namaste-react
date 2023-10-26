import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// console.log(resList);

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  
  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
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

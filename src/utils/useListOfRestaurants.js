// this file is created as custom hook for RestaurantList
import { useEffect, useState } from 'react';

const useListOfRestaurants = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        // optional chaining
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        setlistOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    return { listOfRestaurants, filteredRestaurants, setFilteredRestaurants };
}

export default useListOfRestaurants;


// this is the cutom hook for listOfRestaurants
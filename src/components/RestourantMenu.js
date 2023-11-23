import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestourantMenu from '../utils/useRestourantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestourantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestourantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);
    const dummy = "Dummy Data";
   
    if(resInfo == null) return  <Shimmer /> ; 
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const itemCards= resInfo?.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards

  .map(ele=>ele.card.card.itemCards).filter((ele, index)=>(index===1 || index===2)&&ele).flat()
  // console.log("**********"+JSON.stringify(itemCards),resId);

  // console.log(resInfo?.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories = resInfo?.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) => c.card?.["card"]?.["@type"] == 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);
  return  (
    <div className='text-center'>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
        {/* <h2>Menu</h2>
        <ul>
          
          {itemCards?.map((item)=>( <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price / 100}</li>))}
            
        </ul> */}

{/* categories accordions  */}

{categories.map((category, index) => (
  // controled component
  <RestaurantCategory 
  key={category?.card?.card.title}
  data={category?.card?.card} 
  showItems={index == showIndex ? true : false}
  setShowIndex={() => setShowIndex(index)}
  dummy={dummy}/>
))};
    </div>
  )

}

export default RestourantMenu;
import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestourantMenu from '../utils/useRestourantMenu';
const RestourantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestourantMenu(resId);

   
    if(resInfo == null) return  <Shimmer /> ; 
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const itemCards= resInfo?.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards
  .map(ele=>ele.card.card.itemCards).filter((ele, index)=>(index===1 || index===2)&&ele).flat()
  console.log("**********"+JSON.stringify(itemCards),resId);
  return  (
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
          
          {itemCards?.map((item)=>( <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price / 100}</li>))}
            
        </ul>
    </div>
  )

}

export default RestourantMenu;
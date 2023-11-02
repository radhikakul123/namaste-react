import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { Menu_API } from '../utils/constants';
const RestourantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch(Menu_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if(resInfo == null) return  <Shimmer /> ; 
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards} = resInfo?.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  
  console.log("**********"+JSON.stringify(itemCards));
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
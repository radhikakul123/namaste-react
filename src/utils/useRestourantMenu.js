import { Menu_API } from './constants';
import { useState, useEffect } from 'react';

const useRestourantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch(Menu_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
  return resInfo;
}

export default useRestourantMenu;
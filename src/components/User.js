import React, { useState } from 'react'

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
      // Api Calls
    }, []);
    
  return (
   <div className='m-4 p-4 bg-gray-50 rounded-lg'>
    <h2> count = {count}</h2>
    <h2>count2 = {count2}</h2>
    <h2>Name: {props.name}</h2>
    <h3>Location: {"Pune"}</h3>
    <h4>Contact: {"radhika.svyas@gmail.com"}</h4>
   </div>
  )
}

export default User;
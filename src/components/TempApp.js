import React, { useEffect, useState } from 'react';

const TempApp=()=>{
  const[city,setCity]=useState(null);
  const[search,setSearch]=useState('delhi');
  
  useEffect(()=>{
    const getData=async()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7c0ff0b6046c1142f48ab2c407b64750`;
      const json_data=await fetch(url);
      const orig_data=await json_data.json();
      setCity(orig_data.main);
    }
    getData();
  },[search]);

  return(
       <>
        <div className="container">
        <div className='main_div'>
        <h1 className="heading">Temp App</h1>
        <input type="search" 
        placeholder="Enter any city..."
        value={search} onChange={(event)=>{setSearch(event.target.value);}} />
            
        { !city?(<p>No Data</p>) :
            (<>
               <h2>
               <i className="fas fa-street-view"></i>
                {search}
               </h2>
               <h1>
                 {city.temp}&#176;C
               </h1>
               <h3>
                  Min : {city.temp_min}&#176;C | Max : {city.temp_max}&#176;C 
               </h3>
            </>
            )}
         </div>
         </div>
       </>
   );
} 

export default TempApp;
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { FaTemperatureHigh } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import "./Hero.css"
const Hero = () => {
    const [api, setApi] = useState("");
    const dispatch = useDispatch();
    const { world } = useSelector((s) => s);
    const weather = async () => {
        if (api.length) {
          const { data } = await axios(
           ` https://api.openweathermap.org/data/2.5/weather?q=${api}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
           );
          dispatch({ type: "ADD_WORLD", payload: data });
        } else {
            setApi("Bishkek");
        }
      };
      console.log(world);
   useEffect(() => {
    weather();
   },[]);
    return (
        <div id='hero'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className='container'>
                <div className='hero'>
                     <center>
                    <input onChange={(e) => toString(setApi(e.target.value))}/>
                    <button onClick={weather}>Search</button>      
                     </center>

                
                <div className='world'>
                    <div className='world-title'>
                        <h1 className='world-title-text'>{world.name} {world.sys?.country}</h1>
                    </div>
                    <div className='world-temp'>
                        <h1  style={{display:"flex"}} className='world-temp-text'> <FaTemperatureHigh/>: {world?.main?.temp}</h1>
                    </div>
                    <div className='world-weather'>
                        <h1 className='world-weather-text'> Скорость ветра {world?.wind?.speed}  Kм/ч</h1>    
                    </div>
                
                    
                    <div className='world-pressure'></div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
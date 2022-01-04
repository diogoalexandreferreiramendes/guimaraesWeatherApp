import Button from "react-bootstrap/Button";
import './App.css';
import { WeatherPost } from './components/weatherapp/WeatherPost';
import axios from 'axios';
import {useState, useEffect} from 'react';

const askapi = (x) => {
  return axios
  .get(process.env.REACT_APP_API_KEY)
  .then(({data}) => {
    return data
  })
}



const App = () => {
  const today = new Date()
  const [arrIcon, setArrIcon] = useState([])
  const [arrTemp, setArrTemp] = useState([])
  const [arrWeather, setArrWeather] = useState([])

  useEffect(() => {
    getTemp()
  }, [])


  const displayHora = (x) => {
    let day 
    const functionGetDay = (x) => {
      let day = today.getDay() + x
      if(day === 7){
        day = 0
        return day
      }else if (day === 8) {
        day = 1
        return day
      }else if (day === 9){
        day = 2
        return day
      } else if (day === 10){
        day = 3
        return day
      }
      return day
    }

    switch(functionGetDay(x)){
      case 0: 
        day = "Sunday"
        return day
      case 1:
        day = "Monday"
        return day
      case 2:
        day = "Tuesday"
        return day
      case 3:
        day = "Wednesday"
        return day
      case 4:
        day = "Thursday"
        return day
      case 5:
        day = "Friday"
        return day
      case 6:
        day = "Saturday"
        return day
      default:
        day = "Dia Errado"
        return day
    }
  }

  // Data

  const displayDate = (x,y) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];

    if(d.getDate() > 20 && d.getDate() < 32){
      if(d.getDate() > 1 && d.getDate() < 4){
        let month = months[d.getMonth() + 1];
        if(month === 0){
          month = 0
        }
        return (d.getDate() + x) + ' ' + month
      }
    }
    return (d.getDate() + x) + ' ' + month

  }

  const getTemp = async (i) => {
    await askapi().then((data) => {
      for(let i = 0; i < 5; i++){
        setArrTemp(temp => [...temp, data.daily[i].temp.day])
        setArrWeather(weather => [...weather, data.daily[i].weather[0].main])
        setArrIcon(icons => [...icons, data.daily[i].weather[0].icon])
      }
    })
  }

  return(
    <>
      <div>
        <div id="titlespacediv">
          <div className="container-fluid" id="titlespace">
            <h1>Guimarães Weather App</h1>
          </div>
        </div>
        <div id="maindiv">
          <div id="citytitle">
            <p>Guimarães, Portugal</p>
          </div>
          <div id="divweatherposts">
            <WeatherPost day={displayHora(0)} data={displayDate(0,0)} imagem={"http://openweathermap.org/img/w/" + arrIcon[0] + ".png"} temp={arrTemp[0]} weather={arrWeather[0]} />
            <WeatherPost day={displayHora(1)} data={displayDate(1,0)} imagem={"http://openweathermap.org/img/w/" + arrIcon[1] + ".png"} temp={arrTemp[1]} weather={arrWeather[1]} />
            <WeatherPost day={displayHora(2)} data={displayDate(2,0)} imagem={"http://openweathermap.org/img/w/" + arrIcon[2] + ".png"} temp={arrTemp[2]} weather={arrWeather[2]} />
            <WeatherPost day={displayHora(3)} data={displayDate(3,0)} imagem={"http://openweathermap.org/img/w/" + arrIcon[3] + ".png"} temp={arrTemp[3]} weather={arrWeather[3]} />
            <WeatherPost day={displayHora(4)} data={displayDate(4,0)} imagem={"http://openweathermap.org/img/w/" + arrIcon[4] + ".png"} temp={arrTemp[4]} weather={arrWeather[4]} />
          </div>
        </div>
      </div>
    </>
  ) 
}

export default App;

import React, { useState, useEffect } from 'react';
import Logo from '../../images/Logo.png';

import './Header.scss'
import '../../weather-icons/sass/weather-icons.scss'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Axios
import axios from 'axios'
import MainButton from '../UI/MainButton';

const Header = () => {

    const [weatherData, setWeatherData] = useState([]);
    const[newIcon, setNewIcon] = useState('');
    const[isUpdated, setISUpdated] = useState(false)

    const [tempUnit, setTempUnit] = useState('K')
    const[tempUnitsCode, setTempUnitsCode] = useState('')
    const[unitIsChanged, setUnitIsChanged] = useState(false);


    //Get Weather Data from API
    const fetchData = async () => {
        const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578${tempUnitsCode}`);
        setWeatherData(response.data);
        setISUpdated(true);
        //reset
        setUnitIsChanged(false);
    }

    //Change icon comming from Api with equivelent one from weather-icons
    const changeDefaultIcon = () => {
  
        // Create new date representing the local Time
        const now = new Date();
        // Converto to UTC Date
        const date = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        // timezone returns shift in seconds from UTC, convert to miliseconds and add to the date epoch time to get localTime
        const millisecondsOffsetUTC = date.getTime() + weatherData.timezone * 1000;
        const localTime = new Date(millisecondsOffsetUTC);
        // Get local sun phases and convert a unix timestamp to time
        const sunrise = new Date(weatherData.sys.sunrise * 1000);
        const sunset = new Date(weatherData.sys.sunset * 1000);
        // Get correct weather icon for day/night periods
        if (date > sunrise && date < sunset) {
            let weatherIconID = `wi wi-owm-day-${weatherData.weather[0].id}`;
            setNewIcon(weatherIconID) ;
        } else {
            let weatherIconID = `wi wi-owm-night-${weatherData.weather[0].id}`;
            setNewIcon(weatherIconID) ;
        }
    }

    useEffect(() => {
        fetchData();
        if(isUpdated) {
            changeDefaultIcon();
        } 
    }, [isUpdated, unitIsChanged])

    

    //change unit from K to celcius and vice versa
    const changeUnit = () => {
        if (tempUnit === '°C') {
            setTempUnit('K')
            setTempUnitsCode('');
            
        }else{
            setTempUnit('°C');
            setTempUnitsCode('&units=metric');
        }
        //fetch data again with new units
        setUnitIsChanged(true);
    }
    // console.log(weatherData);

  return (
    
    <Container>
        <Row>
            <Col  className="leftSideHeader">
                 <img src={Logo} alt='Makadi Heights Logo' className='logo'/>
            </Col>
            <Col md={6} className='rightSideHeader justify-content-end'>
                 {/* <img 
                 src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
                 alt='Current Weather in Makadi' 
                 className='weatherIcon'
                 
                 /> */}
                 {console.log(weatherData)}
                 <div role="button" className='weatherInfo ' onClick={() => changeUnit()}>
                    <i className={`${newIcon} weatherIcon`}></i>
                    <p className='temperature' >
                    {isUpdated&& Math.trunc(weatherData.main.temp)}
                    <span>{tempUnit}</span>
                    </p>
                 </div>
                 <div className='phoneIconContainer'>
                    <FontAwesomeIcon icon={faPhone} className='phoneIcon'/>

                 </div>
                 <div className='bottonContainer'>
                    <MainButton btnName="BOOK NOW" />

                 </div>
    
            </Col>
            
            
        </Row>
    </Container>
  )
}

export default Header
import React, { useState, useEffect } from 'react';
import Pressure from '../../assests/icon/pressure.svg';
import Wind from '../../assests/icon/wind.svg';
import Humidity from '../../assests/icon/humidity.svg';
import styles from './Weather.module.css';

const WeatherCard = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState(false);
  // console.log(weather)
  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        ' https://api.weatherapi.com/v1/current.json?key=1c78eec994274806882153910230411 &q=Maharashtra&aqi=no'
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data))
        .catch((error) => console.log(error));
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    setTime(strTime);
  });

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '-' + mm + '-' + yyyy;
    setDate(formattedToday);
  });

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className={styles.lower}>
        {weather ? (
          <div className={styles.forecast}>
            {' '}
            <div className={styles.condition}>
              <img
                src={weather.current.condition.icon}
                style={{ width: '95px', height: '80px' }}
              />
              <p>{weather.current.condition.text}</p>
            </div>
            <span
              style={{
                width: '1.367px',
                height: '79.37px',
                background: '#fff',
              }}
            ></span>
            <div className={styles.pres}>
              <p id={styles.p1}>
                <span>{weather.current.temp_c}</span>°C
              </p>
              <p id={styles.p2}>
                {' '}
                <img src={Pressure} style={{ width: '17px', height: '28px' }} />
                {weather.current.pressure_mb} mbar pressure
              </p>
            </div>
            <span
              style={{
                width: '1.367px',
                height: '79.37px',
                background: '#fff',
              }}
            ></span>
            <div className={styles.humidity}>
              <p id={styles.p3}>
                {' '}
                <img src={Wind} style={{ width: '19px', height: '35px' }} />
                {weather.current.wind_kph} km/h wind
              </p>
              <p id={styles.p3}>
                {' '}
                <img src={Humidity} style={{ width: '19px', height: '35px' }} />
                {weather.current.humidity} % humidity
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;

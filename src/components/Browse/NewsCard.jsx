import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

const NewsCard = () => {
  const [news, setNews] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const newsData = () =>
      fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=be6893eb880f4a2395ce08ba4e8db508'
      )
        .then((resp) => resp.json())
        .then((data) => setNews(data.articles[2]))
        .catch((error) => console.log(error));

    newsData();
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
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '-' + mm + '-' + yyyy;
    setDate(formattedToday);
  });

  return (
    <div className={styles.news_Container}>
      <img src={news.urlToImage} alt='newsImage' />
      <div className={styles.description}>{news.description}</div>
      <div className={styles.date_time}>
        <p className={styles.title}>{news.title}</p>
        <span>{date}</span>
        <span>|</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default NewsCard;

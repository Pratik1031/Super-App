import React, { useState } from 'react';
import up from '../../assests/icon/up.svg';
import down from '../../assests/icon/down.svg';
import Tone from '../../assests/audio/timertone.mp3';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import Styles from './Timer.module.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerTone = new Audio(Tone);

  const increaseSecond = () => {
    if (seconds == 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes == 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds == 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours == 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes}:${seconds}`;
  }

  const handleButtonClick = () => {
    setPlaying((prev) => !prev);

    if (!playing) {
      timerTone.play();
    } else {
      timerTone.pause();
      timerTone.currentTime = 0;
    }
  };

  return (
    <div className={Styles.container}>
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={['#FF6A6A']}
        >
          {({ remainingTime }) => (
            <span style={{ color: 'white', fontSize: '1.5rem' }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: '35vw', textAlign: 'center' }}>
        <div className={Styles.timer_section}>
          <div className={Styles.times}>
            <p>Hours</p>
            <img onClick={increaseHour} src={up} />
            <p>{hours}</p>
            <img onClick={decreaseHour} src={down} />
          </div>
          <div className={Styles.times}>
            <p>Minutes</p>
            <img onClick={increaseMinute} src={up} />
            <p>{minutes}</p>
            <img onClick={decreaseMinute} src={down} />
          </div>
          <div className={Styles.times}>
            <p>Seconds</p>
            <img onClick={increaseSecond} src={up} />
            <p>{seconds}</p>
            <img onClick={decreaseSecond} src={down} />
          </div>
        </div>
        <div className={Styles.playing_button} onClick={handleButtonClick}>
          {playing ? <p>Stop</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};

export default Timer;

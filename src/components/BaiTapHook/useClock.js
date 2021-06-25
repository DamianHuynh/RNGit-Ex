import {useState, useEffect} from 'react';

const formatTime = date => {
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const seconds = `${date.getSeconds()}`.padStart(2, '0');
  //19:04:09 !== 19:4:9
  //'05'; '035'.slice(-2)
  return `${hours}:${minutes}:${seconds}`;
};

export default function useClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTime = formatTime(now);
      setTime(newTime);
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  return time;
}

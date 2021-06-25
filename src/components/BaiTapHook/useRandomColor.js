import {useEffect, useState} from 'react';

export default function useRandomColor(color = '#bff') {
  const [backgroundColor, setBackgroundColor] = useState(color);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16,
      )}`;
      setBackgroundColor(randomColor);
    }, 2000);
    return () => clearInterval(colorInterval);
  }, []);

  return backgroundColor;
}

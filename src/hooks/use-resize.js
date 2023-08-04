// use-resize.js
import { useState, useEffect } from 'react';
import {
  SCREEN_MOBILE, SCREEN_S, SCREEN_XL,
} from '../utils/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      // Add a setTimeout with a delay of 200 milliseconds (adjust as needed)
      setTimeout(() => {
        setWidth(event.target.innerWidth);
      }, 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width <= SCREEN_MOBILE,
    isScreenX: width >= SCREEN_S & width < SCREEN_XL,
    isScreenPC: width >= SCREEN_XL,
  };
};
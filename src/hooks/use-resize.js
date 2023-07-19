// use-resize.js
import { useState, useEffect } from 'react';
import {
  SCREEN_MOBILE, SCREEN_S, SCREEN_M, SCREEN_L, SCREEN_XL,
} from '../utils/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width <= SCREEN_MOBILE,
    isScreenSm: width >= SCREEN_S,
    isScreenMd: width >= SCREEN_M,
    isScreenLg: width >= SCREEN_L,
    isScreenXl: width >= SCREEN_XL,
  };
};
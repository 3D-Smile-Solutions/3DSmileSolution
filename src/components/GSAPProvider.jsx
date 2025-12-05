import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  initGSAP, 
  setupResizeHandler, 
  setupScrollFix,
  gsap,
  ScrollTrigger 
} from '../utils/gsapConfig';

const GSAPContext = createContext({ isReady: false });

export const useGSAP = () => useContext(GSAPContext);

export const GSAPProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cleanupResize;
    let cleanupScroll;

    const initialize = async () => {
      await initGSAP();
      cleanupResize = setupResizeHandler();
      cleanupScroll = setupScrollFix();
      setIsReady(true);
    };

    initialize();

    return () => {
      if (cleanupResize) cleanupResize();
      if (cleanupScroll) cleanupScroll();
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        setTimeout(() => ScrollTrigger.refresh(true), 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <GSAPContext.Provider value={{ isReady, gsap, ScrollTrigger }}>
      {children}
    </GSAPContext.Provider>
  );
};

export default GSAPProvider;
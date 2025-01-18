import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
        // Initial fade in on component mount
      if (containerRef.current) {
          containerRef.current.classList.add('fade-in');

          const timeoutId = setTimeout(() => {
              containerRef.current.classList.remove('fade-in');
                setIsInitialLoad(false)
            }, 300);

            return () => clearTimeout(timeoutId)
        }
    }else{
        if (containerRef.current) {
        // Apply transition effect on route change
        containerRef.current.classList.add('fade-in');

      const timeoutId = setTimeout(() => {
          containerRef.current.classList.remove('fade-in');
      }, 300); // Adjust this value to match transition duration

        return () => clearTimeout(timeoutId)
      }
    }
    }, [location.pathname,isInitialLoad]);

  return (
      <div className='transition-wrapper' ref={containerRef}>
        {children}
      </div>
  );
};

export default TransitionWrapper;
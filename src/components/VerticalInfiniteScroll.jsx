import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const VerticalInfiniteScroll = ({ children, speed = 60, height = '80vh' }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    const startAnimation = () => {
      const wrapper = wrapperRef.current;
      const content = contentRef.current;

      if (!wrapper || !content) return;

      // Clone the content (original structure)
      const clone = content.cloneNode(true);
      wrapper.appendChild(clone);

      const totalHeight = content.offsetHeight;

      // Animation with 1-second delay (only change needed)
      animationRef.current = gsap.fromTo(
        wrapper,
        { y: 0 },
        {
          y: -totalHeight,
          duration: speed,
          ease: 'none',
          repeat: -1,
          delay: 1 // Added this line only
        }
      );
    };

    // Start animation after short timeout to ensure DOM ready
    const timer = setTimeout(startAnimation, 100);
    
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
      // Clean up clone (original cleanup logic)
      if (wrapperRef.current?.lastChild !== contentRef.current) {
        wrapperRef.current?.removeChild(wrapperRef.current.lastChild);
      }
    };
  }, [speed]);

  // Original JSX structure preserved exactly
  return (
    <div
      style={{
        height,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div ref={wrapperRef}>
        <div ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default VerticalInfiniteScroll;
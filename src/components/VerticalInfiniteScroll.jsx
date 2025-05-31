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

    const totalHeight = content.offsetHeight;

    // Wait until DOM has measurable height
    if (totalHeight === 0) {
      requestAnimationFrame(startAnimation);
      return;
    }

    // Clone the content
    const clone = content.cloneNode(true);
    wrapper.appendChild(clone);

    // Animate
    animationRef.current = gsap.fromTo(
      wrapper,
      { y: 0 },
      {
        y: -totalHeight,
        duration: speed,
        ease: 'none',
        repeat: -1,
        delay: 1 // Optional delay
      }
    );
  };

  requestAnimationFrame(startAnimation); // Start after DOM is painted

  return () => {
    if (animationRef.current) {
      animationRef.current.kill();
    }
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
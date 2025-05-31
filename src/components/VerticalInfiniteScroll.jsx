import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const VerticalInfiniteScroll = ({ children, speed = 60, height = '80vh' }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    // Function to start animation once height is available
    const tryStartAnimation = () => {
      const totalHeight = content.offsetHeight;

      if (totalHeight === 0) return; // Still not ready

      // Clone the content
      const clone = content.cloneNode(true);
      wrapper.appendChild(clone);

      // Start GSAP animation
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

    // Use ResizeObserver to watch for real content height
    observerRef.current = new ResizeObserver(() => {
      if (content.offsetHeight > 0) {
        tryStartAnimation();
        observerRef.current.disconnect(); // Stop watching once ready
      }
    });

    observerRef.current.observe(content);

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (wrapper.lastChild !== content) {
        wrapper.removeChild(wrapper.lastChild);
      }
      observerRef.current?.disconnect();
    };
  }, [speed]);

  return (
    <div
      style={{
        height,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div ref={wrapperRef}>
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
};

export default VerticalInfiniteScroll;

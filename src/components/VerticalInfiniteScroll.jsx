import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const VerticalInfiniteScroll = ({ children, speed = 60, height = '80vh' }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    // Function to start animation only when height is ready
    const startWhenReady = () => {
      const totalHeight = content.offsetHeight;

      if (totalHeight === 0) {
        requestAnimationFrame(startWhenReady); // Try again on next frame
        return;
      }

      // Clone the content
      const clone = content.cloneNode(true);
      wrapper.appendChild(clone);

      // Start animation
      animationRef.current = gsap.fromTo(
        wrapper,
        { y: 0 },
        {
          y: -totalHeight,
          duration: speed,
          ease: 'none',
          repeat: -1,
          delay: 1, // Optional delay
        }
      );
    };

    requestAnimationFrame(startWhenReady); // First frame

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      // Cleanup the clone if exists
      if (wrapper.lastChild !== content) {
        wrapper.removeChild(wrapper.lastChild);
      }
    };
  }, [speed]);

  return (
    <div
      style={{
        height,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div ref={wrapperRef}>
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
};

export default VerticalInfiniteScroll;
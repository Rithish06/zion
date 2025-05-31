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

    // Delay until height is ready
    const waitForHeightAndStart = () => {
      const height = content.offsetHeight;

      if (height === 0) {
        // DOM not ready yet, try again on next frame
        requestAnimationFrame(waitForHeightAndStart);
        return;
      }

      // Step 1: Clone content
      const clone = content.cloneNode(true);
      wrapper.appendChild(clone);

      // Step 2: Animate after 500ms (optional safety delay)
      animationRef.current = gsap.fromTo(
        wrapper,
        { y: 0 },
        {
          y: -height,
          duration: speed,
          ease: 'none',
          repeat: -1,
          delay: 0.5, // Optional delay after clone
        }
      );
    };

    requestAnimationFrame(waitForHeightAndStart); // Start loop

    return () => {
      if (animationRef.current) animationRef.current.kill();
      if (wrapper.lastChild !== content) wrapper.removeChild(wrapper.lastChild);
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

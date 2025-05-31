import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const VerticalInfiniteScroll = ({ children, speed = 60, height = '80vh' }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    let observer;
    let clone;
    let timeout;

    const startAnimation = () => {
      const totalHeight = content.offsetHeight;

      if (totalHeight === 0) return; // Still not ready

      clone = content.cloneNode(true);
      wrapper.appendChild(clone);

      animationRef.current = gsap.fromTo(
        wrapper,
        { y: 0 },
        {
          y: -totalHeight,
          duration: speed,
          ease: 'none',
          repeat: -1,
        }
      );
    };

    const handleReady = () => {
      // Start animation with slight delay to ensure layout is stable
      timeout = setTimeout(startAnimation, 100);
    };

    // Wait for height to become stable using ResizeObserver
    observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.height > 0) {
          handleReady();
          observer.disconnect();
          break;
        }
      }
    });

    observer.observe(content);

    return () => {
      if (timeout) clearTimeout(timeout);
      if (observer) observer.disconnect();
      if (animationRef.current) animationRef.current.kill();
      if (clone && wrapper.contains(clone)) wrapper.removeChild(clone);
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

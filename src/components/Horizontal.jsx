import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const HorizontalScroll = ({ children, speed = 30 }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    // Wait for layout to be calculated
    requestAnimationFrame(() => {
      const contentWidth = content.offsetWidth;

      if (contentWidth > 0) {
        const clone = content.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        wrapper.appendChild(clone);

        animationRef.current = gsap.fromTo(
          wrapper,
          { x: 0 },
          {
            x: -contentWidth,
            duration: speed,
            ease: 'none',
            repeat: -1,
          }
        );
      }
    });

    return () => {
      animationRef.current?.kill();
      const lastChild = wrapper.lastChild;
      if (lastChild && lastChild !== content) {
        wrapper.removeChild(lastChild);
      }
    };
  }, [speed]);

  const handleMouseEnter = () => animationRef.current?.pause();
  const handleMouseLeave = () => animationRef.current?.play();

  return (
    <div className="overflow-hidden w-full relative">
      <div ref={wrapperRef} className="flex whitespace-nowrap">
        <div
          ref={contentRef}
          className="flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {React.Children.map(children, (child, idx) => (
            <div key={idx} className="inline-block">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
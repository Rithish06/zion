import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const HorizontalScroll = ({ children, speed = 30 }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    // Early return if refs aren't ready
    if (!wrapper || !content) return;

    // Clone the content
    const clone = content.cloneNode(true);
    wrapper.appendChild(clone);

    const contentWidth = content.offsetWidth;

    // Only animate if we have content width
    if (contentWidth > 0) {
      const animation = gsap.fromTo(
        wrapper,
        { x: 0 },
        {
          x: -contentWidth,
          duration: speed,
          ease: 'none',
          repeat: -1,
        }
      );

      return () => {
        animation.kill();
        if (wrapper.lastChild === clone) {
          wrapper.removeChild(clone);
        }
      };
    }
  }, [speed]); // Add speed as dependency if it might change

  const handleMouseEnter = () => contentRef.current?.pause();
  const handleMouseLeave = () => contentRef.current?.play();

  return (
    <div className="overflow-hidden w-full relative">
      <div ref={wrapperRef} className="flex whitespace-nowrap">
        <div ref={contentRef} className="flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {React.Children.map(children, (child) => (
            <div className="inline-block">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
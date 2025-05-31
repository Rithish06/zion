import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SparkBrushCursor = () => {
  const sparksContainerRef = useRef(null);

  useEffect(() => {
    // Create sparks
    const createSparks = (e, isClick = false) => {
      if (!sparksContainerRef.current) return;

      const sparkCount = isClick ? 15 : 3;
      const x = e.clientX;
      const y = e.clientY;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        sparksContainerRef.current.appendChild(spark);

        const angle = Math.random() * Math.PI * 2;
        const distance = isClick ? 50 + Math.random() * 70 : 30 + Math.random() * 50;

        gsap.fromTo(
          spark,
          {
            x,
            y,
            opacity: 1,
            scale: 0.5 + Math.random() * 0.5
          },
          {
            x: x + Math.cos(angle) * distance,
            y: y + Math.sin(angle) * distance,
            opacity: 0,
            duration: isClick ? 0.8 + Math.random() * 0.5 : 0.5 + Math.random() * 0.5,
            ease: isClick ? 'power2.out' : 'power1.out',
            onComplete: () => {
              if (spark.parentNode) spark.remove();
            }
          }
        );
      }
    };

    let lastMove = 0;
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastMove > 30) {
        createSparks(e);
        lastMove = now;
      }
    };

    const handleClick = (e) => {
      createSparks(e, true);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div
        ref={sparksContainerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />
      <style jsx>{`
        .spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(to right, #ff99cc, #ffccff);
          border-radius: 50%;
          filter: blur(1px);
        }
        body {
          cursor: auto; /* normal cursor */
        }
        a, button, .clickable {
          cursor: pointer; /* hand cursor */
        }
      `}</style>
    </>
  );
};

export default SparkBrushCursor;

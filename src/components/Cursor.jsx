import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SparkBrushCursor = () => {
  const cursorRef = useRef(null);
  const sparksContainerRef = useRef(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Brush follow animation
    const follow = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power1.out'
      });
    };

    // Create sparks function (reusable for both move and click)
    const createSparks = (e, isClick = false) => {
      if (!sparksContainerRef.current) return;
      
      // Determine number of sparks - more for click
      const sparkCount = isClick ? 15 : 3;
      
      for (let i = 0; i < sparkCount; i++) {
        // Create a new spark
        const spark = document.createElement('div');
        spark.className = 'spark';
        sparksContainerRef.current.appendChild(spark);
        
        // Random angle and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = isClick ? 50 + Math.random() * 70 : 30 + Math.random() * 50;
        
        // Brush tip position (adjust these values to match your brush image)
        // The values below assume the brush tip is at the bottom of the image
        const brushRect = cursorRef.current?.getBoundingClientRect();
        const brushTipX = (brushRect?.left || e.clientX) + (brushRect?.width || 42) / 2;
        const brushTipY = (brushRect?.top || e.clientY) + (brushRect?.height || 70) - 5; // 5px from bottom
        
        // Spark animation
        gsap.fromTo(spark,
          {
            x: brushTipX,
            y: brushTipY,
            opacity: 1,
            scale: 0.5 + Math.random() * 0.5
          },
          {
            x: brushTipX + Math.cos(angle) * distance,
            y: brushTipY + Math.sin(angle) * distance,
            opacity: 0,
            duration: isClick ? 0.8 + Math.random() * 0.5 : 0.5 + Math.random() * 0.5,
            ease: isClick ? 'power2.out' : 'power1.out',
            onComplete: () => {
              if (sparksContainerRef.current && spark.parentNode) {
                sparksContainerRef.current.removeChild(spark);
              }
            }
          }
        );
      }
    };

    // Throttled mouse move handler
    let lastMove = 0;
    const handleMove = (e) => {
      follow(e);
      const now = Date.now();
      if (now - lastMove > 30) {
        createSparks(e);
        lastMove = now;
      }
    };

    // Click handler
    const handleClick = (e) => {
      createSparks(e, true);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="brush-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: '50px',
          height: '50px',
          backgroundImage: 'url(/makeup-brush.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        ref={sparksContainerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998
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
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default SparkBrushCursor;
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: ['Hello, World!', 'This is a typewriter effect.', 'Enjoy coding!'],
      autoStart: true,
      loop: true,
    });

    // Cleanup function
    return () => {
      // typewriter.pauseFor(2500).deleteAll().start();
    };
  }, []);

  return <div ref={typewriterRef}></div>;
};

export default TypewriterComponent;

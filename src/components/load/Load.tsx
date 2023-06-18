'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function Load() {
  const containerRef = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current as unknown as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/load.json')
    });
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div ref={containerRef} className="-mt-10 h-auto w-20"></div>
    </div>
  );
}

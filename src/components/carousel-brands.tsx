'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.carousel-item', {
        xPercent: -100 * (images.length - 1),
        ease: 'none',
        duration: images.length * 3,
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize(
            (x) => parseFloat(x) % (100 * images.length)
          ),
        },
      });
    }, carouselRef);

    return () => ctx.revert();
  }, [images]);
  return (
    <div className="relative w-full h-40 overflow-hidden" ref={carouselRef}>
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none w-96 sm:w-80 md:w-96 lg:w-96 h-40 carousel-item"
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              width={390}
              height={150}
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

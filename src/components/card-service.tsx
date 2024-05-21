import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, href }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:shadow-xl hover:scale-105"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="text-6xl mb-4">
        <Image
          src={`/images/icons/${icon}.svg`}
          alt="Icon"
          width={100}
          height={100}
        />
      </div>
      <h4 className="text-xl font-semibold mb-2">
        <a href={href ? href : '#'}>{title}</a>
      </h4>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

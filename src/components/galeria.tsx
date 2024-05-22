import Image from 'next/image';
import image1 from '../../public/images/1.jpg';
import image2 from '../../public/images/2.jpg';
import image3 from '../../public/images/3.jpg';
import image4 from '../../public/images/4.jpg';
import image5 from '../../public/images/5.jpg';
import image6 from '../../public/images/6.jpg';
import image7 from '../../public/images/7.jpg';
import image8 from '../../public/images/8.jpg';
import image9 from '../../public/images/9.jpg';
import image10 from '../../public/images/10.jpg';
import image11 from '../../public/images/11.jpg';
import image12 from '../../public/images/12.jpg';

const images = [
  { src: image1, alt: 'Image 1', className: 'row-span-1 col-span-1' },
  { src: image2, alt: 'Image 2', className: 'row-span-1 col-span-1' },
  { src: image3, alt: 'Image 3', className: 'row-span-1 col-span-1' },
  { src: image4, alt: 'Image 4', className: 'row-span-1 col-span-1' },
  { src: image5, alt: 'Image 5', className: 'row-span-1 col-span-1' },
  { src: image6, alt: 'Image 6', className: 'row-span-1 col-span-1' },
  { src: image7, alt: 'Image 7', className: 'row-span-1 col-span-1' },
  { src: image8, alt: 'Image 8', className: 'row-span-1 col-span-1' },
  { src: image9, alt: 'Image 9', className: 'row-span-1 col-span-1' },
  { src: image10, alt: 'Image 10', className: 'row-span-1 col-span-1' },
  { src: image11, alt: 'Image 11', className: 'row-span-1 col-span-1' },
  { src: image12, alt: 'Image 12', className: 'row-span-1 col-span-1' },
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mx-4 sm:mx-8 md:mx-20">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-full h-48 sm:h-64 md:h-80 ${image.className} overflow-hidden transform transition-transform duration-500 hover:scale-105`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

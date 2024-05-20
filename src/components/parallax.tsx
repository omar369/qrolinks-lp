import { ReactNode } from 'react';

type ParallaxProps = {
  children: ReactNode;
};

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  return (
    <div
      className="bg-fixed bg-center bg-cover h-screen"
      style={{ backgroundImage: "url('/images/portada1.jpg')" }}
    >
      {children}
    </div>
  );
};

export default Parallax;

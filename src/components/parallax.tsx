import { ReactNode } from 'react';

type ParallaxProps = {
  children: ReactNode;
};

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  return (
    <div
      className="bg-fixed bg-center bg-cover h-screen"
      style={{
        backgroundImage: "url('/images/portada1.jpg')",
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el contenedor
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        backgroundPosition: 'center', // Centra la imagen en el contenedor
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;

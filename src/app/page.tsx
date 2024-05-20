import Image from 'next/image';
import MainNav from '@/components/main-nav';
import Parallax from '@/components/parallax';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CardAbout } from '@/components/card-aboutUs';
import CardService from '@/components/card-service';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MainNav />

      <div className="w-screen h-screen">
        <Parallax>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center p-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Bienvenido a QROLINKS
              </h1>
              <p className="text-lg md:text-2xl">
                Nos encargamos de todo para tu evento empresarial
              </p>
            </div>
          </div>
        </Parallax>
        <section className="py-6 bg-white text-center">
          <div className="container mx-auto py-6" data-aos="fade-up">
            <div className="flex justify-center p-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Buscar proveedores, hacer cotizaciones, coordinar, evaluar,
                decidir, etc. pueden ser tareas que consumen mucho tiempo.
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row p-4">
              <div
                className="lg:order-2 lg:w-1/2 flex justify-center p-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <Image
                  src="/images/portadaOG.jpg"
                  className="img-fluid "
                  alt="About us"
                  width={1000}
                  height={100}
                />
              </div>
              <div
                className="lg:order-1 lg:w-1/2 pt-4 lg:pt-0 p-4 flex justify-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <CardAbout />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-100 text-center p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            SERVICIOS Y PRODUCTOS
          </h2>
          <p className="text-lg md:text-xl">Contenido de la sección 2</p>
          <div className="grid grid-cols-3 gap-6 justify-center items-center m-6">
            <CardService icon={''} title={''} description={''} />
            <CardService icon={''} title={''} description={''} />
            <CardService icon={''} title={''} description={''} />
            <CardService icon={''} title={''} description={''} />
            <CardService icon={''} title={''} description={''} />
            <CardService icon={''} title={''} description={''} />
          </div>
        </section>
        <footer className="flex items-center justify-center w-full h-16 bg-gray-200">
          <p>
            &copy; 2022 Qrolinks. Web Aplication by Ohm-E Web Apps. All right
            reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

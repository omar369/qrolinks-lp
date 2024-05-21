import Image from 'next/image';
import MainNav from '@/components/main-nav';
import Parallax from '@/components/parallax';
import { CardAbout } from '@/components/card-aboutUs';
import CardService from '@/components/card-service';
import Gallery from '@/components/galeria';
import Carousel from '@/components/carousel-brands';

export default function Home() {
  const imagesCarousel = [
    '/images/res4.png',
    '/images/res5.png',
    '/images/res6.png',
    '/images/res7.png',
    '/images/res8.png',
    '/images/res9.png',
    '/images/res10.png',
    '/images/res1.png',
    '/images/res2.png',
    '/images/res3.png',
  ];

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
                Nos encargamos de todo para tu evento empresarial.
              </p>
            </div>
          </div>
        </Parallax>
        <section className="py-6 bg-white text-center">
          <div className="container mx-auto py-6" data-aos="fade-up">
            <div className="flex justify-center p-4">
              <h3 className="text-2xl md:text-2xl mb-4">
                Buscar proveedores, hacer cotizaciones, coordinar, evaluar,
                decidir, etc. pueden ser tareas que consumen mucho tiempo.
                Nosotros nos preocupemos por esos detalles y tu solo te encargas
                de disfrutar.
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
        <section className="px-20 bg-gray-100 text-center p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            SERVICIOS Y PRODUCTOS
          </h2>
          <p className="text-lg md:text-xl">
            Algunos ejemplos de eventos y los productos que te sugerimos para
            cada uno.
          </p>
          <div className="grid grid-cols-3 gap-6 justify-center items-center p-10 mx-10">
            <CardService
              icon={'tema'}
              title={'Temáticas'}
              description={'¡Cuentanos sobre que quieres celebrar!'}
            />
            <CardService
              icon={'igna'}
              title={'Ignauguraciones / Activaciones'}
              description={'...'}
            />
            <CardService
              icon={'food'}
              title={'Banquetes'}
              description={'...'}
            />
            <CardService
              icon={'trofeo'}
              title={'Premiaciones'}
              description={'...'}
            />
            <CardService
              icon={'meeting'}
              title={'Meetings'}
              description={'Equipo audiovisual para tus juntas importantes'}
            />
            <CardService
              icon={'conf'}
              title={'Conferencias'}
              description={'...'}
            />
            <CardService
              icon={'fam'}
              title={'Eventos Familiares'}
              description={'...'}
            />
            <CardService
              icon={'sports'}
              title={'Eventos Deportivos'}
              description={'...'}
            />
            <CardService
              icon={'party'}
              title={'La Pura Fiesta'}
              description={'...'}
            />
          </div>
        </section>
        <section className="px-20 bg-gray-100 text-center p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-lg md:text-xl">
            Tenemos convenios con establecimientos si buscas una experiencia
            fuera de tu empresa.
          </p>
          {/* SCROLL HORIZONTAL DE MARCAS Y RESTAURANTES */}
          <div className="container mx-auto py-12">
            <Carousel images={imagesCarousel} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Un poco de nuestro trabajo
          </h2>
          <Gallery />
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

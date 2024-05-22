import Image from 'next/image';
import MainNav from '@/components/main-nav';
import Parallax from '@/components/parallax';
import { CardAbout } from '@/components/card-aboutUs';
import CardService from '@/components/card-service';
import Gallery from '@/components/galeria';
import Carousel from '@/components/carousel-brands';
import ContactForm from '@/components/contac-form';

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
        <section className="bg-white text-center" id="nosotros">
          <div className="container" data-aos="fade-up">
            <div className="flex justify-center p-4 mx-2 md:mx-10">
              <h3 className="text-md md:text-2xl sm:text-2xl mb-4">
                Buscar proveedores, hacer cotizaciones, coordinar, evaluar,
                decidir, etc. pueden ser tareas que consumen mucho tiempo.
                Nosotros nos preocupemos por esos detalles y tu solo te encargas
                de disfrutar.
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row xs:p-1 xs:mx-1 sm:p-3 sm:mx-3 md:p-6 md:mx-6 lg:p-10 lg:mx-10">
              <div
                className="lg:order-2 lg:w-1/2 flex justify-center p-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <Image
                  src="/images/portadaOG.jpg"
                  className="img-fluid "
                  alt="About us"
                  width={1200}
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
        <section
          className="px-2 sm:px-10 lg:px-20 bg-gray-100 text-center p-10"
          id="servicios"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            SERVICIOS Y PRODUCTOS
          </h2>
          <p className="text-lg md:text-xl">
            Algunos ejemplos de eventos y los productos que te sugerimos para
            cada uno.
          </p>
          <div className="grid grid-cols-3 gap-6 justify-center items-center p-3 mx-3 sm:p-6 sm:mx-6 md:p-15 md:mx-15 lg:p-20 lg:mx-20">
            <CardService
              icon={'tema'}
              title={'Temáticas'}
              description={'...'}
            />
            <CardService
              icon={'igna'}
              title={'Ignauguraciones'}
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
              description={'...'}
            />
            <CardService
              icon={'conf'}
              title={'Conferencias'}
              description={'...'}
            />
            <CardService
              icon={'fam'}
              title={'Familiares'}
              description={'...'}
            />
            <CardService
              icon={'sports'}
              title={'Deportivos'}
              description={'...'}
            />
            <CardService icon={'party'} title={'Fiestas'} description={'...'} />
          </div>
        </section>
        <section
          className="m-0 px-0 lg:py-10 bg-gray-100 text-center"
          id="clientes"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-lg md:text-xl">
            Tenemos convenios con establecimientos si buscas una experiencia
            fuera de tu empresa.
          </p>
          {/* SCROLL HORIZONTAL DE MARCAS Y RESTAURANTES */}
          <div className="container mx-0 px-0">
            <Carousel images={imagesCarousel} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4" id="galeria">
            Un poco de nuestro trabajo
          </h2>
          <Gallery />
        </section>
        <section
          className="mx-2 p-3 lg:mx-30 lg:py-30 bg-gray-900 text-center"
          id="contacto"
        >
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              Contáctanos
            </h2>
            <ContactForm />
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

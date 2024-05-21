'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Temáticas',
    href: '#servicios',
    description:
      '¡Para festividades o la dinámica que sea! Conseguimos estructuras y adornos patrios, naviseños, dia de muertos, san valentin, casino, etc.',
  },
  {
    title: 'Activaciones',
    href: '#servicios',
    description:
      'Si hay una ignauguración o apertura dentro de la empresa, te conseguimos lo necesario para que darle la importancia que se merece.',
  },
  {
    title: 'Banquetes',
    href: '#servicios',
    description:
      'Contamos con servicios de comida y coctelería dentro y fuera de tu empresa. Trabajamos con restaurantes y bares en la ciudad de Querétaro.',
  },
  {
    title: 'Conferencias',
    href: '#servicios',
    description:
      'Llevamos equipo audiovisual extraordinario para comunicar un mensaje importante a todo tu equipo.',
  },
  {
    title: 'Premiaciones',
    href: '#servicios',
    description:
      'Podemos conseguir desde antes los reconocimientos como trofeos y un gran equipo de audio para anunciarlos.',
  },
  {
    title: 'Eventos Familiares',
    href: '#servicios',
    description:
      'Si requieres de juegos y dinámicas para que las familias se diviertan dentro de tu empresa, también lo podemos hacer realidad.',
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#nosotros"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Qrolinks
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Somos un equipo dedicado a brindar la mejor experiencia
                      para tus eventos empresariales y que nuestros clientes
                      solo se encarguen de disfrutar de la experiencia.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#nosotros" title="¿Cómo trabajamos?">
                Lo que ofrecemos en cada servicio
              </ListItem>
              <ListItem href="#servicios" title="Servicios">
                Servicios y Paquetes
              </ListItem>
              <ListItem href="#clientes" title="Nuestro trabajo">
                Muestra de nuestro trabajo y clientes
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios / Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#galeria" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Galería
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

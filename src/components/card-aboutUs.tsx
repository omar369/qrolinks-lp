import { BellRing, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const puntos = [
  {
    title: 'Servicio integrado',
    description:
      'Gestionamos los servicios necesarios para garantizar el éxito del evento.',
  },
  {
    title: 'Coordinación',
    description:
      'Nos mantenemos en comunicación con nustros clientes durante todo el proceso.',
  },
  {
    title: 'Ejecución y operación',
    description:
      'Contamos con personal que pueda auxiliar a nuestros clientes antes y durante el evento.',
  },
];
type CardProps = React.ComponentProps<typeof Card>;

export function CardAbout({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>
        <CardTitle>¿Cómo trabajamos?</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="mt-6">
          {puntos.map((punto, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 sm:grid-cols-[25px_1fr_sm]"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-lg font-medium leading-none">
                  {punto.title}
                </p>
                <p className="text-md text-muted-foreground">
                  {punto.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4 p-4">
          <div className="flex-1 space-y-1">
            <p className="text-lg leading-none italic">
              En Qrolinks, nos preocupamos por cada detalle e integramos una
              serie de servicios para darle solución al conjunto de tareas y
              pendientes relacionados con tu evento.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

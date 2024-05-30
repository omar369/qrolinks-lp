'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().min(1, { message: 'Nombre es requerido' }),
  email: z.string().email({ message: 'Email inválido' }),
  reason: z.string().min(1, { message: 'Razón es requerida' }),
  message: z.string().min(1, { message: 'Mensaje es requerido' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el correo');
      }

      alert('Correo enviado con éxito');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar el correo');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w mx-10 px-10 lg:mx-30 lg:p-30 bg-gray-800 shadow-md rounded-lg space-y-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} className="sm:w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} className="sm:w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="reason"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <Input {...field} className="sm:w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} className="sm:w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-yellow-600"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

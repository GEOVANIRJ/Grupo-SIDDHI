import './globals.css';
import type { Metadata } from 'next';
import { DarkModeProvider } from '@/context/DarkModeContext';

export const metadata: Metadata = {
  title: 'Grupo SIDDHI - Corte y Grabado Láser',
  description: 'Especialistas en corte y grabado láser de precisión',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
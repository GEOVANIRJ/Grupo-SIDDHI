import './globals.css';
import type { Metadata } from 'next';
import { DarkModeProvider } from '@/context/DarkModeContext';

export const metadata: Metadata = {
  title: 'Grupo SIDDHI - Corte y Grabado Láser',
  description: 'Especialistas en corte y grabado láser de precisión',
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
  <link rel="icon" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#ffffff" />
</head>
      <body>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
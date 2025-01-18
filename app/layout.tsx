//layout.tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from './ReduxProvider';
import Header from '@/app/components/organisms/Header/Header'; // Import your Header component
import Footer from '@/app/components/organisms/Footer/Footer'; // Import your Footer component
import './styles/_breakpoints.scss';
import './styles/_mixins.scss';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Management App',
  description: 'Manage your books with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header /> {/* Header is only here */}
          <main>{children}</main> {/* Page content goes here */}
          <Footer /> 
        </ReduxProvider>
      </body>
    </html>
  );
}
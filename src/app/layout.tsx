import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travis Halleck - Web Developer',
  description: 'Personal portfolio and blog of Travis Halleck, a web developer specializing in modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

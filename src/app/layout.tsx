import type { Metadata } from 'next';
import Providers from '@/components/Providers/Providers';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Geogis Pdf Generator',
  description: '',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt">
      <body className={ubuntu.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

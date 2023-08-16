import type { Metadata } from 'next';

import { Header, Footer } from '~components';
import { getClassName } from '~utils';

import { helvetica, passionOne } from '~fonts';
import '~styles/global.css';
import '~styles/zero.css';

export const metadata: Metadata = {
  title: '🌠 Armageddon',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ru"
      className={getClassName(helvetica.variable, passionOne.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

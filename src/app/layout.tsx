import type { Metadata } from 'next';

import { Header } from '~components';
import { Footer } from '~/components/layout/Footer/Footer';
import { getClassNames } from '~utils';

import { Helvetica, PassionOne } from '~fonts';
import '~styles/global.css';
import '~styles/zero.css';

export const metadata: Metadata = {
  title: 'Armageddon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={getClassNames(Helvetica.variable, PassionOne.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

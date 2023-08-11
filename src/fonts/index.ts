import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google';

export const helvetica = localFont({
  src: [
    {
      path: './src/helvetica/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './src/helvetica/regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './src/helvetica/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

export const passionOne = Passion_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-passion-one',
});

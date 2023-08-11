import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google';

export const Helvetica = localFont({
  src: [
    {
      path: './src/helvetica_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './src/helvetica_regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './src/helvetica_bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

export const PassionOne = Passion_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-passion-one',
});

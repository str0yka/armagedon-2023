import localFont from 'next/font/local';

export const helvetica = localFont({
  src: [
    {
      path: './src/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './src/regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './src/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

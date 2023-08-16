import localFont from 'next/font/local';

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

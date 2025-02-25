import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Providers } from '@/store/providers';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Awwwards',
  description: 'Responsive Layout with role based authentication in Next.js',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/icons/logo-192.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/icons/icon-512.png',
    },
  ],
};

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={
          process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

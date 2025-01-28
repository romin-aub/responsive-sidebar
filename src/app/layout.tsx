import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Awwwards',
};

export const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={process.env.ENV === 'development' ? 'debug-screens' : ''}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

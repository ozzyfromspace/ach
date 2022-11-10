import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider
      value={{ size: '22', className: 'text-[hsl(0,0%,23%)]' }}
    >
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}

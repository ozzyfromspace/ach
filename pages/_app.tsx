import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <IconContext.Provider
        value={{ size: '22', className: 'text-[hsl(0,0%,23%)]' }}
      >
        <Component {...pageProps} />
      </IconContext.Provider>
    </ReduxProvider>
  );
}

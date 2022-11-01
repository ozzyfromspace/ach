import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="pl-6 pr-6">
      <Component {...pageProps} />
    </main>
  );
}

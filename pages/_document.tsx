import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="body-bg">
        <Main />
        <div id="nav-modal"></div>
        <NextScript />
      </body>
    </Html>
  );
}

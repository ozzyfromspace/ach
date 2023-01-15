import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="fonts.googleapis"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          key="fontsgstatic"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;400&family=Montserrat:wght@400;500;600&family=Poppins:wght@100;200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <div id="nav-modal"></div>
        <NextScript />
      </body>
    </Html>
  );
}

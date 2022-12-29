import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
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
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&family=Montserrat:wght@400;500;600&family=Poppins:wght@100;200;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;400&family=Fjalla+One&family=Nanum+Gothic&family=PT+Sans+Narrow&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-gray-light">
        <Main />
        <div id="nav-modal"></div>
        <NextScript />
      </body>
    </Html>
  );
}

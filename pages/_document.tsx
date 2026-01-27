import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGES ROUTER");

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/img/logo/favicon.svg" />
        <meta name="keywords" content="Nestar, Demo, Real Estate, nestar, devex mern, mern nextjs fullstack" />
        <meta name="description" content="Nestar — buy and sell properties anywhere, anytime in South Korea." />
        <meta name="description:ru" content="Nestar — покупайте и продавайте недвижимость в любой точке Южной Кореи." />
        <meta name="description:ko" content="Nestar — 대한민국 어디서나 언제든 부동산을 사고팔 수 있어요." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

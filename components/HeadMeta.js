import Head from 'next/head';

export default function Metatags({
  title = 'Digitale Produktentwicklung',
  description = 'Mit Technologie, Strategie und Design Probleme lösen, Werte schaffen und Menschen erreichen.',
  image = '/public/3DDREIECK.svg',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <title>Ambrecht.de</title>
      <link rel="shortcut icon" href="/favicon2.ico" />
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;800&display=swap"
        rel="stylesheet"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="all" />
    </Head>
  );
}

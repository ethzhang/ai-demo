import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate promotional copywriting in seconds."
          />
          <meta property="og:site_name" content="twitterbio.com" />
          <meta
            property="og:description"
            content="Generate promotional copywriting in seconds"
          />
          <meta property="og:title" content="ClassNow AI Helper" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ClassNow AI Helper" />
          <meta
            name="twitter:description"
            content="Generate promotional copywriting in seconds"
          />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

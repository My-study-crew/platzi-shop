import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    <Html lang="en">
      <Head>
        <title>Platzi Shop</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}

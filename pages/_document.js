import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">            
                <Head>
                    <link rel="icon" type="image/png" href={require("../images/ms-icon-310x310.png")}></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
import { useEffect } from "react";
import "@/styles/globals.css";
import "../public/assets/scss/main.scss"; // Import main.scss
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import Head from "next/head";
import "../styles/main.module.css"; // Import module-level CSS

import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      {/* Add any meta tags or other head elements here */}
      <Head>
        <meta name="description" content="Your App Description" />
        <title>Your App Title</title>
      </Head>

      {/* Render the layout around the component */}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

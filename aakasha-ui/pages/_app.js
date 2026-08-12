import Script from "next/script";
import "@/styles/globals.css";
import "../public/assets/scss/main.scss";
import "../styles/main.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#2b3cff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

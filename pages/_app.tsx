import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '700'], // Specify weights you need
  style: ['normal', 'italic'], // Specify styles you need
  subsets: ['latin'], // Specify subsets you need
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
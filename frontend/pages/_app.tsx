import { useState } from "react";
import styled, { css } from "styled-components";
import Head from "next/head";
import "styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "utils/theme";

// Components
import Navigation from "components/Navigation";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";

export default function App({ Component, pageProps }): JSX.Element {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Accipiter Systems is a computer networking company that specializes in optical and PCIe solutions for edge and fog computing."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:title"
          content="PCIe Switches and High Performance Networking | Accipiter Systems"
        />
        <meta
          property="og:description"
          content="Accipiter Systems is a computer networking company that specializes in optical and PCIe solutions for edge and fog computing."
        />
        <meta
          property="og:image"
          content="https://media-exp3.licdn.com/dms/image/C4D0BAQGwj1Yn6c-Htw/company-logo_200_200/0/1519922119076?e=2159024400&v=beta&t=v6KCaeoyQNwzZLUvlssIsaE9oMWW9TiWD1h4JZjE9hQ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Accipiter Systems" />
        <meta property="og:url" content="https://accipitersystems.com/" />
        <meta
          name="twitter:title"
          content="PCIe Switches and High Performance Networking | Accipiter Systems"
        />
        <meta
          name="twitter:description"
          content="Accipiter Systems is a computer networking company that specializes in optical and PCIe solutions for edge and fog computing."
        />
        <meta
          name="twitter:card"
          content="https://media-exp3.licdn.com/dms/image/C4D0BAQGwj1Yn6c-Htw/company-logo_200_200/0/1519922119076?e=2159024400&v=beta&t=v6KCaeoyQNwzZLUvlssIsaE9oMWW9TiWD1h4JZjE9hQ"
        />
        <meta
          name="twitter:image"
          content="https://media-exp3.licdn.com/dms/image/C4D0BAQGwj1Yn6c-Htw/company-logo_200_200/0/1519922119076?e=2159024400&v=beta&t=v6KCaeoyQNwzZLUvlssIsaE9oMWW9TiWD1h4JZjE9hQ"
        />
        <meta
          name="keywords"
          content="accipiter, systems, bandwidth, switching, networking, application, technology, automation, storage, HPC, development"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://accipitersystems.com/"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Layout setSidebar={setSidebar} sidebar={sidebar}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const Layout = ({ children, setSidebar, sidebar }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navigation setSidebar={setSidebar} />
      <Backdrop onClick={() => setSidebar(false)} open={sidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

interface IBackdrop {
  open: boolean;
}

const Backdrop = styled.div<IBackdrop>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #000;
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease;
  ${(props) =>
    props.open &&
    css`
      z-index: 999;
      opacity: 0.8;
    `}
`;

import appConfig from '../config.json'

function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
        }
        body {
          color: ${appConfig.theme.colors.neutrals['000']};
          width: 100%;
          font-family: 'Open sans', sans-serif;
          background-color: #000;
          background-image: url("");
          background-repeat: no-repeat;
        }
        /* App fit Height */
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */
      `}</style>
    );
} 

export default function CustonApp({ Component, pageProps }) {
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
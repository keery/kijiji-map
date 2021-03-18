import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NextApp, { AppProps } from "next/app";
import "../styles/globals.css";
import theme from "../theme";
import { client } from "~api/client-react-query";
import { QueryClientProvider } from "react-query";
import { appWithTranslation } from "next-i18next";
import Bugsnag, { isBugsnagEnabled } from "~utils/bugsnag";
import { BugsnagErrorBoundary } from "@bugsnag/plugin-react";
import ErrorPage from "~pages/_error";

let ErrorBoundary: BugsnagErrorBoundary;

if (isBugsnagEnabled) {
  ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);
}

const App = ({ Component, pageProps }: AppProps) => {
  const content = (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );

  if (isBugsnagEnabled) {
    return (
      <ErrorBoundary
        // @ts-ignore
        FallbackComponent={ErrorPage}
      >
        {content}
      </ErrorBoundary>
    );
  }

  return content;
};

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(App);

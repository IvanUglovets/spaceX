import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, useQuery } from "@apollo/client";
import { client } from "@services";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

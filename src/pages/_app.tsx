import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, trustWallet, localWallet } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="1bbccf4e700a15a996eb5826a5065966"
      activeChain="ethereum"
      supportedWallets={[
        metamaskWallet(),
        trustWallet(),
        coinbaseWallet(),
        localWallet(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

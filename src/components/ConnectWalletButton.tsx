import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";

function ConnectWalletButton() {
  return (
    <div>
      <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonBg: "hsl(116, 65%, 42%)",
            accentText: "hsl(116, 65%, 42%)",
          },
        })}
        btnTitle="Connect Wallet"
        modalSize="wide"
        modalTitle="Connect Wallet"
        modalTitleIconUrl="https://amaranth-left-felidae-964.mypinata.cloud/ipfs/bafkreigz6g5cl3frnkcgzmkoyk3ceaotmgsgrfa7wzaimuoxzjf6ccs3w4"
        showThirdwebBranding={false}
      />
    </div>
  );
}

export default ConnectWalletButton;

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';

type Props = {
    children: string | React.JSX.Element | React.JSX.Element[];
};

const WalletConnectionProvider = ({ children }: Props) => {
    const network = clusterApiUrl('devnet');

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletConnectionProvider;
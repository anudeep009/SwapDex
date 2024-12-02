import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';

import Header from './components/Header/Header';
import SwapCard from './components/SwapCard/SwapCard';
import Footer from './components/Footer/Footer';

function App() {
    const network = clusterApiUrl('devnet');

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="min-h-screen bg-dark text-white flex flex-col">
                        <Header />
                        <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-dark to-dark-card">
                            <SwapCard />
                        </main>
                        <Footer />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
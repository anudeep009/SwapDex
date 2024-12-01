import React from 'react';
import Header from './components/Header/Header';
import SwapCard from './components/SwapCard/SwapCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-dark to-dark-card">
        <SwapCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
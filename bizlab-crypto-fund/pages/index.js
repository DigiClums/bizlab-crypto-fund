import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">BizLab Crypto Savings Club</h1>
        <p className="mt-4 text-xl">BTC Safety + Airdrop Rewards = Smarter Crypto Growth</p>
        <a 
          href="https://forms.gle/your-google-form-link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Request Access
        </a>
      </header>

      {/* About Section */}
      <section className="py-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p>
          70% of funds go into Bitcoin (safe reserve). 
          30% is used for airdrop hunting & early crypto projects. 
          Investors receive quarterly reports and profit distribution.
        </p>
      </section>

      {/* Wallet Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-xl font-semibold">Fund Wallet (Public)</h2>
        <p className="mt-2">BTC Wallet: <span className="font-mono">bc1qexampleaddress</span></p>
        <a 
          href="https://www.blockchain.com/explorer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View on Blockchain Explorer
        </a>
      </section>

      {/* Ledger Section */}
      <section className="py-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Investor Ledger</h2>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_LINK/pubhtml?widget=true&amp;headers=false" 
          width="100%" 
          height="400"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-blue-600 text-white">
        <p>Join our community: 
          <a href="https://t.me/yourtelegram" className="ml-2 underline">Telegram</a> | 
          <a href="https://wa.me/yourwhatsapp" className="ml-2 underline">WhatsApp</a>
        </p>
      </footer>
    </div>
  );
}

import React from 'react';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-[#243b4a]">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 py-8 text-center bg-gradient-to-b from-[#243b4a] to-transparent">
        <h1 className="text-xs uppercase tracking-[0.5em] font-medium">moments by mansi.</h1>
      </nav>

      {/* Main Content */}
      <main>
        <Gallery />
      </main>

      {/* Footer / Contact */}
      <footer className="bg-[#1a2b3c] border-t border-white/5">
        <ContactForm />
        <div className="pb-8 text-center opacity-30 text-[10px] uppercase tracking-widest">
          © 2026 Moments by Mansi
        </div>
      </footer>
    </div>
  );
}

export default App;

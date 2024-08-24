import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter.jsx';
import Cards from './Components/Cards.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter/>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

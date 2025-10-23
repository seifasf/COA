import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;


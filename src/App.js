import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Je suis un développeur passionné par React et le développement web.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

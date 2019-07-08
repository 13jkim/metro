import React from 'react';
import Header from './components/header/header';
import Sermons from './components/sermons/sermons';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sermons />
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;

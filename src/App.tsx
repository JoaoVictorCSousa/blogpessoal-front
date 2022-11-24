import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title/Title';
import { Text  } from './components/Text/Text';
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';

function App() {
  
  return (
    <>

    <Navbar/>
    <Home />
    <Footer/>
      
      

    </>
    
   
  );
}

export default App;


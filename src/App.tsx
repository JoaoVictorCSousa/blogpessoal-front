import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/estaticos/Navbar/Navbar';
import {Footer} from './components/estaticos/Footer/Footer';
import {Home} from './Paginas/Home/Home';
import './App.css';
import {Login} from './Paginas/login/Login';
import { CadastroUsuario } from './Paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/listaTema';
import ListaPostagem from './components/postagens/listaPostagem/listaPostagem';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route  path="/cadastrousuario" element={<CadastroUsuario/>} />

      <Route path="/temas" element={<ListaTema />} />

      <Route path="/posts" element={<ListaPostagem />} />



      </Routes>
      <Footer />
    </Router>

  );
}


export default App;
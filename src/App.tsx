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
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route  path="/cadastrousuario" element={<CadastroUsuario/>} />

      <Route path="/temas" element={<ListaTema />} />

      <Route path="/posts" element={<ListaPostagem />} />



      </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>

  );
}


export default App;
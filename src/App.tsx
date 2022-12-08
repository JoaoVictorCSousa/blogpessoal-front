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
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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

      <Route path="/formularioPostagem" element={<CadastroPost />} />

      <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

      <Route path="/formularioTema" element={<CadastroTema />} />

      <Route path="/formularioTema/:id" element={<CadastroTema />} />

      <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

      <Route path="/deletarTema/:id" element={<DeletarTema />} />



      </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>

  );
}


export default App;
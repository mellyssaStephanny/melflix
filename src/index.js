import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Vídeo';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Que pena! Essa página não existe :/ </h1>
    <p>
      <a href="/">Voltar pra home :)</a>
    </p>
        
    <iframe
      title="Página não encontrada"
      src="https://i.imgur.com/SKMrKvw.jpg"
      width="1260"
      height="800" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


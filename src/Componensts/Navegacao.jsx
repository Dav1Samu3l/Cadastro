import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to="/">Dados Pessoais</Link>
      <Link to="/endereco">Endereço</Link>
      <Link to="/agradecimento">Agradecimento</Link>
    </div>
  );
}

export default Navigation;

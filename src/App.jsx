import React, { useState } from 'react';
import DadosPessoaisForm from './Componensts/DadosPessoais';
import Endereco from './Componensts/DadosEndereco';

function App() {

  return (
    <div className="app">
      <div>
        <DadosPessoaisForm />
        <Endereco/> 
      </div>
    </div>
  );
}

export default App;

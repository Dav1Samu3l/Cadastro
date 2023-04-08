import React, { useState } from 'react';
import DadosPessoaisForm from './Componensts/DadosPessoais';
import Endereco from './Componensts/DadosEndereco';
import Agradecimento from './Componensts/agradecimento';

function App() {

  return (
    <div className="app">
      <div>
        <DadosPessoaisForm /> 
        <Endereco/> 
        <Agradecimento/>
      </div>
    </div>
  );
}

export default App;

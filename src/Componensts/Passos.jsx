import React, { useState } from 'react';
import Agradecimento from './agradecimento';
import Endereco from './DadosEndereco';
import DadosPessoaisForm from './DadosPessoais';

function MudarPassos() {
  const [passoAtual, setPassoAtual] = useState(0);

  function retrocederPasso() {
    setPassoAtual(passoAtual - 1);
  }

  function avancarPasso() {
    setPassoAtual(passoAtual + 1);
  }

  const componentesDeFormulario = [
    <DadosPessoaisForm />,
    <Endereco />,
    <Agradecimento />,
  ];

  return (
    <div>
      {componentesDeFormulario[passoAtual]}
      <button  disabled={passoAtual === 0} onClick={retrocederPasso}>Voltar</button>
      <button disabled={passoAtual === componentesDeFormulario.length - 1} onClick={avancarPasso}>Avançar</button>
    </div>
  );
}

export default MudarPassos;

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
      {passoAtual === 0 ? (
        <button onClick={avancarPasso}>Avançar</button>
      ) : passoAtual === componentesDeFormulario.length - 1 ? (
        <button>Enviar</button>
      ) : (
        <div>
          <button disabled={passoAtual === 0} onClick={retrocederPasso}>Voltar</button>
          <button disabled={passoAtual === componentesDeFormulario.length - 1} onClick={avancarPasso}>Avançar</button>
        </div>
      )}
    </div>
  );
}

export default MudarPassos;

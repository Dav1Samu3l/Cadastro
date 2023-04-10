import React from 'react';
import Header from './Header';
import Endereco from './DadosEndereco';
import DadosPessoaisForm from './DadosPessoais';
import Agradecimento from './agradecimento.jsx';
import Marcador from './style.marcador';
import './Passos.css';

function MudarPassos({ passoAtual, setPassoAtual }) {
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
    <div className="container">
      <Header />
      <Marcador passoAtual={passoAtual} setPassoAtual={setPassoAtual} />
      <div className="passo-container">
        {componentesDeFormulario[passoAtual]}
      </div>
      <div className="botao-container">
        {passoAtual === 0 ? (
          <button onClick={avancarPasso}>Avançar</button>
        ) : passoAtual === componentesDeFormulario.length - 1 ? (
          <>
            <button disabled={passoAtual === 0} onClick={retrocederPasso}>
              Voltar
            </button>
            <button className="botao-enviar">Enviar</button>
          </>
        ) : (
          <div>
            <button disabled={passoAtual === 0} onClick={retrocederPasso}>
              Voltar
            </button>
            <button
              disabled={passoAtual === componentesDeFormulario.length - 1}
              onClick={avancarPasso}
            >
              Avançar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MudarPassos; 
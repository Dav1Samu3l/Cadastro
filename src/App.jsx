import React, { useState } from 'react';
// import DadosPessoais from './DadosPessoais';
// import Endereco from './Endereco';
// import Agradecimento from './Agradecimento';

function App() {
  const [passoAtual, setPassoAtual] = useState(0);

  return (
    <div className="app">
      <div>
        <form>
          {/* {passoAtual === 0 && <DadosPessoais />}
          {passoAtual === 1 && <Endereco />}
          {passoAtual === 2 && <Agradecimento />} */}
        </form>
      </div>
    </div>
  );
}

export default App;
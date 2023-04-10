
import React, { useState } from 'react';
import MudarPassos from './Componensts/Passos';

function App() {
  const [passoAtual, setPassoAtual] = useState(0);

  return (
    <div className="container">
      <div>
        <MudarPassos passoAtual={passoAtual} setPassoAtual={setPassoAtual} />
      </div>
    </div>
  );
}

export default App;
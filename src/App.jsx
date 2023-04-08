import React, { useState } from 'react';

import MudarPassos from './Componensts/Passos';
import Header from './Componensts/Header';

function App() {

  return (
    <div className="container">
      <Header />
      <div>
      <MudarPassos/>
      </div>
    </div>
  );
}

export default App;

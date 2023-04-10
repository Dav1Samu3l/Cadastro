import { useEffect, useState } from "react";
import Marcador from "./style.marcador";

function Header() {
  const [agradecimento, setAgradecimento] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/agradecimento") {
      setAgradecimento(true);
    }
  }, []);

  return (
    <div>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {(!agradecimento) && (
        <>
          <h2>Cadastre-se gratuitamente!</h2>
          <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
        </>
      )}
      {(agradecimento) && (
        <>
          <p>Obrigado por se cadastrar!</p>
        </>
      )}
    </div>
    <>
  
    </>

    </div>
  );
}

export default Header;

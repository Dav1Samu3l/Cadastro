import { useEffect, useState } from "react";

function Header(props) {
  const [agradecimento, setAgradecimento] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/agradecimento") {
      setAgradecimento(true);
    }
  }, []);

  return (
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
  );
}

export default Header;

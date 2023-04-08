import { Form, Button } from 'react-bootstrap';

function Agradecimento() {
  return (
    <div>

        <div >
          <h2>Obrigado por se cadastrar!</h2>
          <p>Por favor, informe-nos onde você nos conheceu:</p>
        </div>
      <Form.Select aria-label="Conheceu a loja por" className="mb-3">
        <option>Selecione uma opção</option>
        <option>Pelo Facebook</option>
        <option>Pelo LinkedIn</option>
        <option>Pelo Instagram</option>
      </Form.Select>
    </div>
  );
}

export default Agradecimento;
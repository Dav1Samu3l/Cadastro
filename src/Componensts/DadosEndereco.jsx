import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Endereco() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <FormGroup controlId="logradouro">
            <FormLabel>Logradouro</FormLabel>
            <FormControl type="text" placeholder="Digite o logradouro" />
          </FormGroup>
          <FormGroup controlId="numero">
            <FormLabel>Número</FormLabel>
            <FormControl type="text" placeholder="Digite o número" />
          </FormGroup>
          <FormGroup controlId="bairro">
            <FormLabel>Bairro</FormLabel>
            <FormControl type="text" placeholder="Digite o bairro" />
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup controlId="complemento">
            <FormLabel>Complemento</FormLabel>
            <FormControl type="text" placeholder="Digite o complemento" />
          </FormGroup>
          <FormGroup controlId="cidade">
            <FormLabel>Cidade</FormLabel>
            <FormControl type="text" placeholder="Digite a cidade" />
          </FormGroup>
          <FormGroup controlId="cep">
            <FormLabel>CEP</FormLabel>
            <FormControl type="text" placeholder="Digite o CEP" />
          </FormGroup>
          <FormGroup controlId="estado">
            <FormLabel>Estado</FormLabel>
            <FormControl type="text" placeholder="Digite o estado" />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default Endereco;

import React from 'react';
import {  FormGroup, FormLabel, FormControl } from 'react-bootstrap';

function Endereco() {
  return (
    <div  >
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
  );
}

export default Endereco;

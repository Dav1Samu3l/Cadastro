import React from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';

function DadosPessoaisForm() {
  return (
    <div className="container">
      <Form>
        <FormGroup controlId="nome">
          <FormLabel>Nome</FormLabel>
          <FormControl type="text" placeholder="Digite seu nome" />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <div>
            <MdEmail />
          </div>
          <FormControl type="email" placeholder="Digite seu email" />
        </FormGroup>
      </Form>
    </div>
  );
}

export default DadosPessoaisForm;

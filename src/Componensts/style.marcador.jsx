import React from 'react';
import styled from 'styled-components';
import DadosPessoaisForm from './DadosPessoais';
import Endereco from './DadosEndereco';
import Agradecimento from './agradecimento';

const PassosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const Passo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: ${props => props.ativo ? '#c71d81' : '#868584'};
`;

const NumeroPasso = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.ativo ? '#c71d81' : '#f2f2f2'};
  color: ${props => props.ativo ? '#fff' : '#868584'};
  font-weight: bold;
  margin-bottom: 5px;
`;

const TextoPasso = styled.span`
  text-align: center;
`;
const PassoBord = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: ${props => props.ativo ? '#c71d81' : '#868584'};
  border-bottom: ${props => props.ativo ? '2px solid #c71d81' : 'none'};
`;

function Marcador({ passoAtual }) {
  return (
    <PassosContainer>
      <Passo ativo={passoAtual === DadosPessoaisForm}>
       
        <TextoPasso>Dados pessoais</TextoPasso>
      </Passo>
      <Passo ativo={passoAtual === Endereco}>
        
        <TextoPasso>Endereço</TextoPasso>
      </Passo>
      <Passo ativo={passoAtual === Agradecimento}>
        <TextoPasso>Agradecimento</TextoPasso>
      </Passo>
    </PassosContainer>
  );
}

export default Marcador;


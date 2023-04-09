import React from 'react';
import styled from 'styled-components';

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
    border-bottom: ${props => props.ativo ? '2px solid #c71d81' : 'none'};
    `;

    const TextoPasso = styled.span`
    text-align: center;
    `;

    function Marcador({ passoAtual, setPassoAtual }) {
    return (
        <PassosContainer>
        <Passo ativo={passoAtual === 0}>
            <TextoPasso ativo={passoAtual === 0}>Dados pessoais</TextoPasso>
        </Passo>
        <Passo ativo={passoAtual === 1}>
            <TextoPasso ativo={passoAtual === 1}>Endereço</TextoPasso>
        </Passo>
        <Passo ativo={passoAtual === 2}>
            <TextoPasso ativo={passoAtual === 2}>Agradecimento</TextoPasso>
        </Passo>
        </PassosContainer>
    );
    }

    export default Marcador;

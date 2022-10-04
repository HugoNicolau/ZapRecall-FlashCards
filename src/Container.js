import logo from "./assets/img/logo.png";
import BarraInferior from "./BarraInferior";
import styled from "styled-components";
import React from "react";
import Perguntas from "./Perguntas"

export default function Container() {

  const [concluidas, setConcluidas] = React.useState(0)

  function concluiQuestao(){
    const novoNum = concluidas+1;
    setConcluidas(novoNum)
  }
    
  return (
    <Screen>
      <Logo>
        <img src={logo} alt="imagem do logo" onClick={()=> window.location.reload(false)} />
        <h1 onClick={()=> window.location.reload(false)}>ZapRecall</h1>
      </Logo>

    <Perguntas concluiQuestao={concluiQuestao}/>


      <BarraInferior concluidas={concluidas}/>
    </Screen>
  );
}

const Screen = styled.div`

  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`

const Logo = styled.div`

  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  cursor:pointer;

img {
  width: 52px;
  cursor:pointer;
}

h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  cursor:pointer;
}

`
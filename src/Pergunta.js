import React from "react";
import setaplay from "./assets/img/seta_play.png";
import setavirar from "./assets/img/seta_virar.png";
import Botoes from "./Botoes";
import styled from "styled-components";
import iconErro from "./assets/img/icone_erro.png";
import iconMeio from "./assets/img/icone_quase.png";
import iconAcerto from "./assets/img/icone_certo.png";

export default function Pergunta(props) {
  const { perguntacard, addRespondidos } = props;
  const [cliquei, setCliquei] = React.useState(0);
  console.log(perguntacard, "perguntacardddd");

  function clicarPergunta() {
    const addCliquei = (cliquei + 1) % 4;
    setCliquei(addCliquei);
  }

  if (cliquei === 0) {
    return (
      <Fechada onClick={() => clicarPergunta()} idCard={perguntacard.id}>
        <p>Pergunta {perguntacard.id}</p>
        <img src={setaplay} alt="setaplay" />
      </Fechada>
    );
  } else if (cliquei === 1) {
    return (
      <Aberta>
        <p>{perguntacard.Q}</p>
        <img
          src={setavirar}
          onClick={() => {
            clicarPergunta();
          }}
          alt="setaplay"
        />
      </Aberta>
    );
  } else if (cliquei === 2) {
    return (
      <Resposta onClick={() => clicarPergunta()}>
        <p>{perguntacard.R}</p>
        <div>
          <Botoes idCard={perguntacard.id} addRespondidos={addRespondidos} />
        </div>
      </Resposta>
    );
  } else if (cliquei === 3) {
    if (perguntacard.states === "erro") {
      return (
        <Respondida idCard={perguntacard.id} estado="erro">
          <p>Pergunta {perguntacard.id}</p>
          <img src={iconErro} alt="iconErro" />
        </Respondida>
      );
    }
    if (perguntacard.states === "meio") {
      return (
        <Respondida idCard={perguntacard.id} estado="meio">
          <p>Pergunta {perguntacard.id}</p>
          <img src={iconMeio} alt="iconMeio" />
        </Respondida>
      );
    }
    if (perguntacard.states === "acerto") {
      return (
        <Respondida idCard={perguntacard.id} estado="acerto">
          <p>Pergunta {perguntacard.id}</p>
          <img src={iconAcerto} alt="iconAcerto" />
        </Respondida>
      );
    }
  }
}

const Respondida = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    text-decoration: line-through;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color:${props => props.estado==='erro' ? "#ff3030": (props.estado==="meio" ? "#ff922e" : "#2fbe34") };
  }
`;

const Fechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    /* text-decoration: ${(props) =>
      props.idCard ? "line-through" : "none"}; */
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const Aberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Resposta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: 0px;
  }
`;

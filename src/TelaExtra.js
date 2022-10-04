import styled from "styled-components";
import logo from "./assets/img/logo.png";

export default function TelaExtra({ setTela }) {
  function mudarTela() {
    setTela(false);
  }
  return (
    <TelaInicial>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <button onClick={() => mudarTela()}>Iniciar Recall!</button>
    </TelaInicial>
  );
}

const TelaInicial = styled.div`
  padding-top: 50%;
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }

  img {
    width: 136px;
  }
  button {
    width: 246px;
    height: 54px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;

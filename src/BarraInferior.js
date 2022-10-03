import styled from "styled-components"
import Botoes from "./Botoes";

export default function BarraInferior(){

    return(
        <Footer>
        <ContainerBotoes>
          <Botoes/>
        </ContainerBotoes>
        <div> 1/4 CONCLUÍDOS</div>
      </Footer>
    )
}

const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 20px;
  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    

    &:nth-child(1) {
      background-color: #ff3030;
      border: 1px solid #ff3030;
    }

    &:nth-child(2) {
      background-color: #ff922e;
      border: 1px solid #ff922e;
    }

    &:nth-child(3) {
      background-color: #2fbe34;
      border: 1px solid #2fbe34;
    }
  }
`;

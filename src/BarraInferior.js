import styled from "styled-components"
import Botoes from "./Botoes";
import perguntas from "./mock";

export default function BarraInferior(props){
  const {concluidas} = props;

    return(
        <Footer>
        
        <div> {concluidas}/{perguntas.length} CONCLUÍDOS</div>
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


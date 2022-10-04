import styled from "styled-components"
import perguntas from "./mock";
import MarcaAcertos from "./ MarcaAcertos";



export default function BarraInferior(props){
  const {concluidas, arrConc} = props;
  
    return(
        <Footer>
        
        <div data-identifier="flashcard-counter"> {concluidas}/{perguntas.length} CONCLUÍDOS</div>

        <Acertos>
        {arrConc.map((a, index)=> <MarcaAcertos key={index} states={a.states}/>)}
        </Acertos>
        
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

const Acertos = styled.div`
    
    display:flex;
    flex-direction: row;
  `


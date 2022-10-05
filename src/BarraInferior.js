import styled from "styled-components"
import perguntas from "./mock";
import MarcaAcertos from "./ MarcaAcertos";



export default function BarraInferior(props){
  const {concluidas, arrConc} = props;
  
  let contem=false;
  for(let i=0; i<arrConc.length;i++){
    if(arrConc[i].states==="erro"){
      contem = true;
      break;
    }
  }
  
    return(
        <Footer>
        
        <div data-identifier="flashcard-counter"> {concluidas}/{perguntas.length} CONCLUÍDOS</div>

        <Acertos>
        {arrConc.map((a, index)=> <MarcaAcertos key={index} states={a.states}/>)}
        </Acertos>
        {(concluidas === perguntas.length) && ((contem)? <h1>Uma pena não ter acertado tudo🙁</h1>: <h1>Parabéns por não errar nenhuma!😊</h1> )}
        {(concluidas === perguntas.length) && ((contem)? <ButtonFail onClick={()=> window.location.reload()}>Tentar novamente!</ButtonFail>: <ButtonSucess onClick={()=> window.location.reload()}>Voltar à tela inicial😊</ButtonSucess> )}
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
  h1{
    margin:10px;
  }

 
`;

const Acertos = styled.div`
    
    display:flex;
    flex-direction: row;
  `

const ButtonFail = styled.button`
width: 246px;
margin:10px;
height: 54px;
font-family: "Recursive";
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
background: #F06B6B;
color: #ffffff;
border: 1px solid #d70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
cursor:pointer;

&:hover{
  background-color:#df8686;
  
}
`

const ButtonSucess = styled.button`
 width: 246px;
    height: 54px;
    margin:10px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    background: #6ff06b;
    color: #ffffff;
    border: 1px solid #5cd43d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    cursor:pointer;

    &:hover{
      background-color:#8dfd89;
      
    }
`
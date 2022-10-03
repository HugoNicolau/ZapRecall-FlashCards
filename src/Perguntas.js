import Pergunta from "./Pergunta"
import perguntas from "./mock"
import React from "react";


export default function Perguntas(props) {
    const {clicarPergunta} = props;
    // const [erradas, setErradas] = React.useState([])
    // const [certas, setCertas] = React.useState([])
    // const [meio, setMeio] = React.useState([])

    // function erreiQuestao(){

    // }
    const [respondidos, setRespondidos] = React.useState([]);
    function addRespondidos(numCard){
        const novoArray = [...respondidos, numCard];
        setRespondidos(novoArray)

        console.log(respondidos, "respondidoss")
      }

  return (
    <>
    {respondidos.map((r)=> (<Pergunta perguntacard={p} />))}
    {perguntas.map((p)=> (<Pergunta perguntacard={p} />) )}
    
      

    </>
  );
}

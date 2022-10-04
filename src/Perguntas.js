import Pergunta from "./Pergunta";
import perguntas from "./mock";
import React from "react";



export default function Perguntas(props) {
  const { concluiQuestao, setArrConc, arrConc } = props;
  
  const [respondidos, setRespondidos] = React.useState([{}]);
  const questoes = perguntas

  function addRespondidos(numCard, estado) {
   
    const novoArray = [...respondidos, { id: numCard, states: estado }];
    const novoArrayConc = [...arrConc, {states: estado}];
    setArrConc(novoArrayConc);
    setRespondidos(novoArray);
    concluiQuestao();
    
    questoes.forEach( (q)=> {(q.id===numCard) && (q.states = estado) })
  }

  
  return (
    <>
      
      {questoes.map((p) => (
        
        <Pergunta  key={p.id} perguntacard={p} addRespondidos={addRespondidos} states={p.states}/>
      ))}

      
    </>
  );
}

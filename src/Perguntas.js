import Pergunta from "./Pergunta";
import perguntas from "./mock";
import React from "react";

export default function Perguntas(props) {
  const { concluiQuestao } = props;
  
  const [respondidos, setRespondidos] = React.useState([{}]);
  const [questoes, setQuestoes] = React.useState(perguntas);

  function addRespondidos(numCard, estado) {
   
    const novoArray = [...respondidos, { id: numCard, states: estado }];
    setRespondidos(novoArray);
    concluiQuestao();
    
    questoes.forEach( (q)=> {q.id===numCard ? q.states =estado : console.log("")})
  }

  return (
    <>
      
      {questoes.map((p) => (
        
        <Pergunta  key={p.id} perguntacard={p} addRespondidos={addRespondidos} states={p.states}/>
      ))}
    </>
  );
}

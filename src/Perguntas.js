import Pergunta from "./Pergunta";
import perguntas from "./mock";
import React from "react";

export default function Perguntas(props) {
  const { clicarPergunta, concluiQuestao } = props;
  
  const [respondidos, setRespondidos] = React.useState([{}]);
  const [questoes, setQuestoes] = React.useState(perguntas);

  function addRespondidos(numCard, estado) {
   
    const novoArray = [...respondidos, { id: numCard, states: estado }];
    setRespondidos(novoArray);
    concluiQuestao();
    console.log(respondidos, "respondidoss");
    
    questoes.forEach( (q)=> {q.id===numCard ? q.states =estado : console.log("oi")})
  }

  return (
    <>
      {/* {respondidos.map((r)=> (<Pergunta perguntacard={r} />))} */}
      {questoes.map((p) => (
        
        <Pergunta perguntacard={p} addRespondidos={addRespondidos} states={p.states}/>
      ))}
    </>
  );
}

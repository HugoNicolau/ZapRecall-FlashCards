import logo from "./assets/img/logo.png";
import BarraInferior from "./BarraInferior";

import Perguntas from "./Perguntas"

export default function Container() {

    
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="imagem do logo" />
        <h1>ZapRecall</h1>
      </div>

    <Perguntas/>


      <BarraInferior/>
    </div>
  );
}


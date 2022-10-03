import styled from "styled-components";

export default function Botoes(props) {
    const {addRespondidos, idCard} = props

  return (
    <ContainerBotoes>
        
      <button data-identifier="forgot-btn" onClick={()=> addRespondidos(idCard,'erro')} >Não lembrei</button>
      <button data-identifier="almost-forgot-btn" onClick={()=> addRespondidos(idCard,'meio')}>Quase não lembrei</button>
      <button data-identifier="zap-btn" onClick={()=> addRespondidos(idCard,'acerto')}>Zap!</button>
    </ContainerBotoes>
  );
}

// const Botao = styled.button`


//     width: 90px;
//     font-family: "Recursive";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 14px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     color: #ffffff;
//     background: ${props => props.id === 1 ? "#ff3030" : (props.id === 2 ? "#ff922e" : "#2fbe34")};

//     border-radius: 5px;
//     border: 1px solid ${props => props.id === 1 ? "#ff3030" : (props.id === 2 ? "#ff922e" : "#2fbe34")};
//     padding: 5px;

// `

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
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
    padding: 5px;
    

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
import React from "react"
import Container from "./Container"
import ResetGlobal from "./ResetGlobal"
import TelaExtra from "./TelaExtra"

export default function App(){

    const [tela, setTela] = React.useState(true)

    return(
        <>
        
        {tela ? <TelaExtra setTela={setTela}/> : <Container/>}
        <ResetGlobal/>

        </>

        )
}
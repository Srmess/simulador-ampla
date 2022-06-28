import React from "react";
import { Divtitleedescription, Divtitleteble } from "../../styles";

export const Titleedescription = () => {

    return(
        <Divtitleedescription>
            <h1>Simulador de Crédito</h1>
            <h2>Para executar uma simulação insira o valor da operação que deseja</h2>
        </Divtitleedescription>
    );
}

export const TableTitle = () =>{
    return(
        <Divtitleteble>
            <h1>Entenda as Taxas</h1>
        </Divtitleteble>
    )
    
}
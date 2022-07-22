import React from "react";
import { Divtitleedescription, Divtitleteble, Divwarnings } from "../../styles";

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

export const Warnings = () => {
    return(
        <Divwarnings>
                <h1><span>*</span> Taxas de Juros e Tarifa de Projeto podem variar de acordo com a classificação do produtor rural <span>*</span></h1>
                <h2><span>*</span> Siumulação feita baseada em parcelas anuais <span>*</span></h2>
        </Divwarnings>
    )
}
import React from "react";
import { useForm } from "react-hook-form";
import { Cardinputstyle, Cardresultstyle, CardtableAstyle, CardtableBstyle } from "../../../styles";
import { onSubmit } from "../../functions/functions";

export const Cardinput = () =>{

    const { register, handleSubmit} = useForm();

    return(

        <Cardinputstyle>
            <h1>De quanto você precisa?</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" autoComplete="off" {...register("number")} />
                <button type="submit" id="button">Simular</button>
            </form>
        </Cardinputstyle>
    );
}

export const Cardresult = () => {

    return(
            <Cardresultstyle>
                <h1>Valor da simulação <br/><span>R$</span></h1>
                <h2 id="textsoma">0,00</h2>
            </Cardresultstyle>
    );
}

export const CardtableA = () =>{
    return(
        <CardtableAstyle>
            <h1>Tabela B</h1>
            <table id="table" >
                <tr id="thead" >
                    <td> REFERÊNCIAS </td> 
                    <td>%</td> 
                    <td> VALOR </td>
                </tr>
                <tr>
                    <td> IOF </td> 
                    <td> 0,38% </td> 
                    <td id="iof">  </td>
                </tr>
                <tr>
                    <td> JUROS </td> 
                    <td> 4,5% </td> 
                    <td id="juros">  </td>
                </tr>
                <tr>
                    <td> TARIFA DE PROJETO </td> 
                    <td> 2% </td> 
                    <td id="tdp">  </td>
                </tr>
                <tr>
                    <td> SEGURO AGRÍCOLA </td> 
                    <td> 1% </td> 
                    <td id="sa">  </td>
                </tr>
                <tr>
                    <td> PRESTAMISTA </td> 
                    <td> 2% </td> 
                    <td id="prest">  </td>
                </tr>
                <tr>
                    <td> CET <br/>Custo Efetivo Total</td> 
                    <td id="porc"></td> 
                    <td id="cet"></td>
                </tr>
            </table>
        </CardtableAstyle>
    )
}

export const CardtableB = () =>{
    return(
        <CardtableBstyle>
            <h1>Tabela A</h1>
            <table id="table" >
                <tr id="thead" >
                    <td> REFERÊNCIAS </td> 
                    <td>%</td> 
                    <td> VALOR </td>
                </tr>
                <tr>
                    <td> IOF </td> 
                    <td> 0.38% </td> 
                    <td id="iof">  </td>
                </tr>
                <tr>
                    <td> JUROS </td> 
                    <td> 4.5% </td> 
                    <td id="juros">  </td>
                </tr>
                <tr>
                    <td> TARIFA DE PROJETO </td> 
                    <td> 2% </td> 
                    <td id="tdp">  </td>
                </tr>
                <tr>
                    <td> SEGURO AGRÍCOLA </td> 
                    <td> 1% </td> 
                    <td id="sa">  </td>
                </tr>
                <tr>
                    <td> PRESTAMISTA </td> 
                    <td> 2% </td> 
                    <td id="prest">  </td>
                </tr>
                <tr>
                    <td> CET <br/>Custo Efetivo Total</td> 
                    <td id="porc"></td> 
                    <td id="cet"></td>
                </tr>
            </table>
        </CardtableBstyle>
    )
}
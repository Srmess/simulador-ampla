import React from "react";
import { useForm } from "react-hook-form";
import { Cardinputstyle, Cardresultstyle, Cardtablecostingstyle } from "../../../styles";
import { onSubmit } from "../../functions/functions";
import circle from "../imgs/circle.png"

export const Cardinput = () =>{
    const { register, handleSubmit} = useForm();

    return(
        <Cardinputstyle>
            <h1>De quanto você precisa?</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" step="0.01" autoComplete="off" {...register("number")}/>
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

export const Cardtablecosting = () =>{
    return(
        <Cardtablecostingstyle>
            <h1>Tabela de Custeio</h1>
            <table id="table" >
                <tr id="thead" >
                    <td> Referências </td> 
                    <td>%</td> 
                    <td> Valor </td>
                </tr>
                <tr>
                    <td> IOF </td> 
                    <td> 0,38% </td> 
                    <td id="iof">  </td>
                </tr>
                <tr>
                    <td> Juros </td> 
                    <td> 6,0% </td> 
                    <td id="juros">  </td>
                </tr>
                <tr>
                    <td> Tarifa de Projeto </td> 
                    <td> 2,0% </td> 
                    <td id="tdp">  </td>
                </tr>
                <tr>
                    <td> Seguro Agrícola </td> 
                    <td> 0,8% </td> 
                    <td id="sa">  </td>
                </tr>
                <tr id="lasttr">
                    <td> Custo Efetivo <br/><span>(mensal)</span></td> 
                    <td> <img id="circle" src={circle} alt="circle"/>0,68% </td>
                    <td id="cet"></td>
                </tr>
            </table>
        </Cardtablecostingstyle>
    )
}

// export const CardTableInvestiment = () =>{
//     return(
//         <CardtableInvestimentStyle>
//             <h1>Tabela de Investimento</h1>
//             <table id="table" >
//                 <tr id="thead" >
//                     <td> Referências </td> 
//                     <td>%</td> 
//                     <td> Valor </td>
//                 </tr>
//                 <tr>
//                     <td> IOF </td> 
//                     <td> 0,38% </td> 
//                     <td id="iof2">  </td>
//                 </tr>
//                 <tr>
//                     <td> Tarifa de Projeto </td> 
//                     <td> 2,0% </td> 
//                     <td id="tdp2">  </td>
//                 </tr>
//                 <tr>
//                     <td> Taxas Cartoriais </td> 
//                     <td> 2,0% </td> 
//                     <td id="tc2">  </td>
//                 </tr>
//                 <tr id="lasttr">
//                     <td>Custo Efetivo <br/><span>(mensal)</span></td> 
//                     <td> <img id="circle" src={circle} alt="circle"/>0,37% </td>
//                     <td id="cet2"></td>
//                 </tr>
//             </table>
//         </CardtableInvestimentStyle>
//     )
// }

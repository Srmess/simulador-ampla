import React from "react";
import { Cardinput, Cardresult, Cardtablecosting } from ".";
import { TableTitle, Warnings } from ".."
import { Maincardstyle, Divtabletaxes } from "../../../styles";

export const Maincard = () => {
    return(
    <Maincardstyle>
        <div>
            <Cardinput/>
            <Cardresult/>
        </div>
        <TableTitle/>
        <Divtabletaxes>
            <Cardtablecosting/>
        </Divtabletaxes>
        <div>
            <Warnings/>
        </div>
    </Maincardstyle>
    )
}
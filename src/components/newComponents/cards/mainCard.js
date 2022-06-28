import React from "react";
import { Cardinput, Cardresult, CardtableA, CardtableB } from ".";
import { Logo, Titleedescription, TableTitle } from ".."
import { Maincardstyle } from "../../../styles";

export const Maincard = () => {
    return(
    <Maincardstyle>
        <Logo/>
        <Titleedescription/>
        <div>
            <Cardinput/>
            <Cardresult/>
        </div>
        <TableTitle/>
        <div>
            <CardtableA/>
            <CardtableB/>
        </div>
    </Maincardstyle>
    )
}
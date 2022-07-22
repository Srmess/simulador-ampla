import React from "react";
import { Cardinput, Cardresult, Cardtablecosting } from ".";
import { Logo, Titleedescription, TableTitle, Warnings, WhatsappButton } from ".."
import { Maincardstyle, Divtabletaxes } from "../../../styles";

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
        <Divtabletaxes>
            <Cardtablecosting/>
        </Divtabletaxes>
        <div>
            <Warnings/>
        </div>
        <div>
            <WhatsappButton/>
        </div>
    </Maincardstyle>
    )
}
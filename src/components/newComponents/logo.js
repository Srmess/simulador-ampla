import React from "react";
import { Divlogo } from "../../styles"
import logo from "./imgs/logo-ampla.png"


export const Logo = () => {
    return(
        <Divlogo>
            <a href="https://amplageourbanismo.leadline.com.br/">
                <img src={logo} alt="ampla geourbanismo logo"/>
            </a>
        </Divlogo>
    )
}
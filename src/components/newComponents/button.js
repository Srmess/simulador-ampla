import React from "react";
import { Divbutton } from "../../styles";
import iconwhatsapp from "./imgs/icon-whatsapp.png"

export const WhatsappButton = () =>{
    return(
        <Divbutton>
            <a href="https://api.whatsapp.com/send/?phone=553333216768&text=Ol%C3%A1%21+Agradecemos+por+entrar+em+contato+com+a+AMPLA+Geourbanismo%21+++Em+breve+um+de+nossos+atendentes+ir%C3%A1+conversar+com+voc%C3%AA.++Se+quiser%2C+pode+adiantar+pra+gente+como+podemos+te+ajudar.&type=phone_number&app_absent=0">
                <button>
                    <img src={iconwhatsapp} alt="whatsapp icon"/>
                    click aqui para sanar duvidas
                </button>
            </a>
        </Divbutton>
    )
}
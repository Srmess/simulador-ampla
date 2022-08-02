import React from "react";
import { Divbutton } from "../../styles";
import iconwhatsapp from "./imgs/icon-whatsapp.png"

export const WhatsappButton = () =>{
    return(
        <Divbutton>
            <a href="https://api.whatsapp.com/send?phone=553333216768&text=Ol%C3%A1,%20tive%20uma%20d%C3%BAvida%20sobre%20cr%C3%A9dito%20rural,%20pode%20me%20ajudar?">
                <button>
                    <img src={iconwhatsapp} alt="whatsapp icon"/>
                    Fale conosco
                </button>
            </a>
        </Divbutton>
    )
}
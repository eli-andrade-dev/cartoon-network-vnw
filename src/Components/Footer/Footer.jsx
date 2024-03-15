import React from "react"

import Git from "./imagensfooter/github.png"
import Linkedin from "./imagensfooter/linkedin.png"
import Warner from "./imagensfooter/Warner"

import * as S from "./FooterStyle"

function Footer() {
    return(
        <S.Footer>

            <img src= {Warner} alt="" />
            <ul>
                <li>Sobre Nós</li>
                <li>Produtos</li>
                <li>Personagens</li>
                
            </ul>
            <S.Div>
                <img src={Git} alt="" />
                <img src={Linkedin} alt="" />
            </S.Div>


        </S.Footer>
    )
}

export default Footer
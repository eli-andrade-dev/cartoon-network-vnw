import React from "react"

import Cn from "./imagensheader/logo cartoon.png"
import Jogos from "./imagensheader/jogos.png"
import Programaçao from "./imagensheader/programaçao.png"

import * as S from "./StyleHeader"

function Header () {
   return(
      <S.HeaderStyle>
      <img src= {Cn} alt="logo cartoon network" />

      <section>
         <S.Div>
            <img src={Jogos} alt="" />
            <h2>JOGOS</h2>
         </S.Div>

         <S.Div>
            <img src={Programaçao} alt="" />
            <h2>PROGRAMAÇÃO</h2>
         </S.Div>
      </section>
      
      </S.HeaderStyle>
   )
}

export default Header
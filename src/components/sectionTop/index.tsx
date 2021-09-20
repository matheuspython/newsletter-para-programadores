import React from "react";
import { SectionTopStyled } from "./style"; 

export const SectionTop:React.FC = () =>{
  return (
    <SectionTopStyled>
      <div className="container">
        <h1>
          <span>seja bem vindo</span>
          <span>veja aqui</span>
          <span>as ultimas noticias do mundo da tecnologia</span>

        </h1>
      </div>
    </SectionTopStyled>
  )
}
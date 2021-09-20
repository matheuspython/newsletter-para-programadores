import React from "react";
import { CadastroStyled } from "./style";

export const Cadastro:React.FC = ()=> {
  return (
    <CadastroStyled>
      <div className="container">
      <form action="">
    <h2>
      Entrar na lista
    </h2>

    <div className="input">
      <input required type="text" />
      <label>Nome</label>
      <span className="error"></span>
    </div>


    <div className="input">
      <input required type="email" />
      <label>Email</label>
      <span className="error"></span>
    </div>

    <button type="submit">Enviar</button>

  </form>
      </div>
    </CadastroStyled>
  )
}
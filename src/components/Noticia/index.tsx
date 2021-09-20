import React from "react";
import { NoticiaStyled } from "./style";

interface PropsNoticias{
  img:string;
  titulo:string;
  descricao:string;
}

export const Noticia:React.FC<PropsNoticias> = ({img, titulo, descricao})=>{
  return(
    <NoticiaStyled>
      <img src={img} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </NoticiaStyled>  
  )
}
import React from "react";
import { NoticiaStyled } from "./style";

interface FooterProps {
  img: string;
  text: string;
  h1: string
}


export const NovasNoticias:React.FC<FooterProps> = ({h1,img,text}) => {

  return(
    <NoticiaStyled>
      <img src={img} alt="img da noticia" />
      <h1>{h1}</h1>
      <p>{text}</p>
    </NoticiaStyled>  
  )
}
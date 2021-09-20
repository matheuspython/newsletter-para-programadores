import React, { useState } from 'react'
import { Noticia } from '../Noticia'
import { MainStyled } from './style'

export const Main:React.FC = ()=>{
  const [noticias, setNoticias] = useState([])


  
  return (
    <MainStyled>
      <h2>veja aqui algumas de nossas noticias </h2>
      <div className="container">
        <Noticia 
          img={"https://yt3.ggpht.com/x81txf8ty_Yd-opA3y5WUehoBcazv2Tl_qOMMEY-BXBmyCvopyK6zFcnMD8XXoMapoq7I8nPuLIB=s640-c-fcrop64=1,00000000ffffffff-nd"}
          titulo={"programadores full stack sao os mais procurado no mercado"}
          descricao={"Desenvolvedor Full Stack é o cargo de TI mais procurado por empresas: 23% das empresas possuem vagas em aberto para Devs Full Stack, 18% para Back-End e 12% para Front-End. Habilidade em metodologias ágeis também é uma grande preferência pelas empresas (28% das vagas)."}
        />
      </div>

    </MainStyled>
  )

}
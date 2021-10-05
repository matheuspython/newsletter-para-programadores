import React from 'react'
import { NovasNoticias } from '../NovasNoticias'
import { MainStyled } from './style'

export const Main:React.FC = ()=>{


  return (
    <MainStyled>
      <h2>veja aqui algumas de nossas noticias </h2>
      <div className="container">
        <NovasNoticias  />
        <NovasNoticias  />
        <NovasNoticias  />
        <NovasNoticias  />
        <NovasNoticias  />
        <NovasNoticias  />
        <NovasNoticias  />
        <NovasNoticias  />

      </div>

    </MainStyled>
  )

}
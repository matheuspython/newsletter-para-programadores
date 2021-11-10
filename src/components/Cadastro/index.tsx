import React, { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { CadastroStyled } from "./style";

export const Cadastro:React.FC = ()=> {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()
    if(!name.trim()){
      return
    }
    await api.post('/cadastrar', { name, email })
    setName('')
    setEmail('')
  }  
  
  return (
    <CadastroStyled>
      <div className="container">
      <form onSubmit={handleSendMessage} action="">
        <h2>
          Cadastre-se aqui
        </h2>

        <div className="input">
          <input 
            onChange={event => setName(event.target.value)}
            value={name}
            required type="text"
          />
          <label>Nome</label>
          <span className="error"></span>
        </div>


        <div className="input">
          <input  
            required 
            type="email" 
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <label>Email</label>
          <span className="error"></span>
        </div>

        <button type="submit">Enviar</button>

      </form>
      </div>
    </CadastroStyled>
  )
}
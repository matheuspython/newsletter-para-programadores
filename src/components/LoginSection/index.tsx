import React from 'react';

import { Container, Informations, Form } from './styles';

export const LoginSection: React.FC = () => {
  return (
    <Container>
      <Informations>
        Seja Bem Vindo
      </Informations>


      <Form >
        <div>

      <h2>
        Digite seus dados nos campos abaixo
      </h2>

    <div className="input">
      <input required type="text" />
      <label>login</label>
      <span className="error"></span>
    </div>


    <div className="input">
      <input required type="password" />
      <label>password</label>
      <span className="error"></span>
    </div>
        </div>

    <button type="submit">Entrar</button>
      </Form>
    </Container>
  )
}

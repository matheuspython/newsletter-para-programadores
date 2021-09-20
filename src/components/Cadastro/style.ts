import styled from "styled-components";

export const CadastroStyled = styled.section`
  padding: 0 0 80px 0;
  form{

    background: ${theme => theme.theme.colors.primary};
  
    width: 100%;
    max-width: 700px;
  
    margin: 32px auto;
    padding: 32px 64px;
  
    display: flex;
    flex-direction: column;
  
  
    form h2 {
    margin-bottom: 32px;
    }
  
    div.input {
    margin-bottom: 24px;
    position: relative;
    }
  
    input,
    button {
    /* reset appeareance */
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  
    /* box */
    width: 100%;
  
    padding: 16px 0;
  
    border:none;
    border-bottom: 1px solid var(--primary-color);
  
    background-color: transparent;
  
    outline: none;
  
    /* text */
    color: var(--text-color);
    font-size: 1em;
  
    }
  
    button {
    margin-top: 16px;
    background-color: var(--primary-color);
    transition: all.4s;
    cursor:pointer;
    }
    button:hover{
      background-color: #E1BC29;
    }
  
    input ~ label {
    position: absolute;
    top: 16px;
    left: 0;
  
    color: rgba(255, 255, 255, 0.6) ;
  
    transition: .4s;
    }
  
    input:focus ~ label,
    input:valid ~ label {
    transform: translateY(-24px);
    font-size: 0.8em;
    letter-spacing: 0.1em;
    }
  
  
    .input span.error {
    display: flex;
  
    padding: 0;
  
    background-color: rgba(255, 0, 0, 0.2);
    }
  
    .input span.error.active {
    border: 1px solid red;
    padding: 0.4em;
    }
  }
`
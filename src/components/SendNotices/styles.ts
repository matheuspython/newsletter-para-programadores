import styled from 'styled-components';

export const Container = styled.main`
display: flex;
align-items: center;
justify-content: center;

form{
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background: #202024;
  border-radius: 12px;

  textarea{
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 100px;
    color: #e1e1e6;
    font-size: 16p;
    line-height: 24px;
    resize: none;
    
    &:focus{
      outline: 0;
    }
    &::placeholder{
      color: #8d8d99;
    }
  }
  button{
    background: #ff008e;
    margin: 32px;
    cursor: pointer;
    align-self: flex-end;
    padding: 0 32px;
    height: 40px;
    color: #fff;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
  
    &:hover{
      filter: brightness(0.1);
    }
  }
}

`;

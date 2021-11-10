import styled from "styled-components";

export const NoticiaStyled = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  margin: 5px;
  background-color: rgb(0,0,0,0.5);

  img{
    width: 100%;
    background-size: cover;
    border-radius: 12px 12px 0 0;
  }
  h1{
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    text-align: center;
    margin: 9px 0;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  p{
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: justify;
    padding: 9px;
  }
`
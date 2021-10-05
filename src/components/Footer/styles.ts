import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 75px;
  margin-top: 9px;
  background: ${theme => theme.theme.colors.primary};
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
}
`;

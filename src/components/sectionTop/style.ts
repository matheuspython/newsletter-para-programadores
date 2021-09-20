import styled from "styled-components";
import media from "styled-media-query"; 

export const SectionTopStyled = styled.section`
width: 100%;
height: 89vh;
max-height: 600px;

.container{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes mudaCor {
  0% { filter: brightness(0) invert(1);}
  11% {filter: none;}
  33%{filter: none;}
  55%{filter: brightness(0) invert(1);}
}

h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 45px;
  letter-spacing: 1.24rem;

  font-family: 'Roboto', sans-serif;
  ${media.between("medium", "large")`
  font-size: 30px;
  `}
  ${media.lessThan("medium")`
    font-size:20px;
  `}
}

span {
  text-transform: uppercase;
  filter: brightness(0) invert(1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: mudaCor 10s ease-in-out infinite;
  padding: 0 0.6rem;
  margin-top: 15px;

}

span:nth-child(1) {
  background-image: linear-gradient(90deg, #007cf0, #00dfd8);
}

span:nth-child(2) {
  background-image: linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128));
  animation-delay: 3.33s;
}

span:nth-child(3) {
  background-image: linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40));
  animation-delay:6.65s ;
}

}
`

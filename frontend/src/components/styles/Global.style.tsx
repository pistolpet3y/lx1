import { createGlobalStyle } from 'styled-components';

/* import backgroundImage from '../../assets/images/bg.with.shoe.jpg'; */
import backgroundImage from '../../assets/images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
      display: flex;
  justify-content: center;
  align-items: center;
  }
`;

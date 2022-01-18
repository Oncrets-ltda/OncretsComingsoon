import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
    url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
    url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
     url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
}

@font-face {
  font-family: 'CoreSansG';
  font-style: Bold;
  font-weight: 600;
  font-display: swap;
  src: local(''),
     url("/fonts/CoreSansG-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'DINBold';
  font-style: Medium;
  font-weight: 600;
  font-display: swap;
  src: local(''),
     url("/fonts/DINBold.ttf") format("truetype");
}

@font-face {
  font-family: 'DINMedium';
  font-style: Medium;
  font-weight: 400;
  font-display: swap;
  src: local(''),
     url("/fonts/DINMedium.ttf") format("truetype");
}

@font-face {
  font-family: 'DIN';
  font-style: Normal;
  font-weight: 200;
  font-display: swap;
  src: local(''),
     url("/fonts/DIN.ttf") format("truetype");
}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyle

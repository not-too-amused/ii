import type { Theme } from 'theme-ui'

export const theme: Theme = {
    breakpoints: ["375px", "768px", "1280px"],
  fonts: {
    body: '"Metropolis", sans-serif',
    heading: '"Metropolis", sans-serif',
  },
  fontSizes: {
    "sm": "9px",
    "md": "16px",
    "lg": "22px"
  },
  space: {
    "xs": "5px",
    "sm": "10px",
    "md": "30px",
    "lg": "50px",
    "xl": "75px"
  },
  sizes: {
    "xs": "5px",
    "sm": "10px",
    "md": "30px",
    "lg": "50px",
    "xl": "75px"
  },
  colors: {
      background: '#fff',
    white: '#fff',
    black: "#0F0F0F",
    text: '#181818',
    subtle: '#707070',
    accent: "#E82735"
  },

  //* VARIANTS
  // text: {
  //   default: {
  //       fontSize: 'md',
  //       WebkitFontSmoothing: 'antialiased',
  //     },
  //   heading: {
  //       variant: "text.default",
  //       fontSize:'lg',
  //       fontFamily: "heading"
  //     },  
  // },
  // styles: {
  //   hr: {
  //   }
  // }
}


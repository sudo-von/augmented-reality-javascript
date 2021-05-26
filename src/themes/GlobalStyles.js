/* Styled components. */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme: { body } }) => body.background_color };
    color: ${({ theme: { text } }) => text.color };
    margin: 0;
    font-family: 'Roboto';
    transition: all 0.25s linear;
  }
  a{
    color: ${({ theme: { text } }) => text.color };
  } 

  model-viewer {
    --poster-color: ${({ theme: { body } }) => body.background_color };
    --progress-bar-color: ${({ theme: { body } }) => body.background_color };
    --progress-bar-height: 0;
    --progress-mask: ${({ theme: { body } }) => body.background_color };
  }
`
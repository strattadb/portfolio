import { createGlobalStyle, keyframes } from 'styled-components';

const fadeUpInKeyframe = keyframes`
  from {
    opacity: 0.1;
    transform: translateY(calc(var(--xs-space) * 0.5));
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const waitAndFadeInKeyframe = keyframes`
  from {
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --sans-serif-font-family: sans-serif;
    --serif-font-family: 'EB Garamond', serif;
    --display-font-family: var(--serif-font-family);
    --handwriting-font-family: 'La Belle Aurore', sans-serif;

    --primary-color-hue: ${(props: any) => props.theme.colors.primaryColorHue};
    --primary-color: hsla(var(--primary-color-hue), 100%, 50%, 1);

    --primary-font-color: hsla(0, 0%, 10%, 1);
    --secondary-font-color: hsla(0, 0%, 30%, 1);
    --tertiary-font-color: hsla(0, 0%, 40%, 1);
    --quaternary-font-color: hsla(0, 0%, 70%, 1);

    --separator-color: hsla(0, 0%, 70%, 1);

    --background-color: hsla(43, 100%, 99%, 1);

    --xs-font-size: 0.8rem;
    --sm-font-size: 0.82rem;
    --md-font-size: 1rem;
    --lg-font-size: 1.4rem;
    --xl-font-size: 2.5rem;
    --xxl-font-size: 5rem;

    --base-space: 0.2rem;
    --xxs-space: calc(var(--base-space) * 2);
    --xs-space: calc(var(--base-space) * 3);
    --sm-space: calc(var(--base-space) * 5);
    --md-space: calc(var(--base-space) * 8);
    --lg-space: calc(var(--base-space) * 13);
    --xl-space: calc(var(--base-space) * 21);

    --sm-transition: 0.1s;
    --md-transition: 0.2s;
    --lg-transition: 0.3s;

    --main-content-width: 90%;
    --main-content-max-width: 80rem;

    --nav-bar-height: 2rem;

    --fade-up-in-keyframe: ${fadeUpInKeyframe};
    --wait-and-fade-in-keyframe: ${waitAndFadeInKeyframe};

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    --main-content-width: 80%;

    --nav-bar-height: 2.5rem;
  }
 }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    background-color: var(--background-color);
  }

  body {
    margin: 0;

    font-family: var(--serif-font-family);
    font-size: var(--md-font-size);
    color: var(--primary-font-color);

    line-height: 1.15;
  }

  #root {
    display: flex;
    flex-flow: column nowrap;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 1em;
    line-height: 1.15;

    margin: 0;
  }
`;

export default GlobalStyle;

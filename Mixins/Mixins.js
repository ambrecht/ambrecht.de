import { css } from 'styled-components';

export const Gradient = () => css`
linear-gradient(
    72.61deg,
    rgba(0, 130, 255, 1) 22.63%,
    rgba(79, 5, 245, 1) 84.67%
  );

`;

export const TextGradient = () => css`
  background: ${Gradient};
  color: transparent;
  -webkit-background-clip: text;
`;

export const ButtonGradient = () => css`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    ${Gradient};
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2em 100em 1em white inset;
  transition-property: all;
  transition-duration: 0.5s;
  text-transform: lowercase;
`;

export const MediaWidth = () => css`
  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

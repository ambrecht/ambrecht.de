import { css } from 'styled-components';

export const TextGradient = () => css`
  text-shadow: none;
  background-image: linear-gradient(
    72.61deg,
    rgba(35, 147, 255, 1) 22.63%,
    rgba(95, 29, 242, 1) 84.67%
  );
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 5));
`;

export const ButtonGradient = () => css`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      72.61deg,
      rgba(35, 147, 255, 1) 22.63%,
      rgba(95, 29, 242, 1) 84.67%
    );
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

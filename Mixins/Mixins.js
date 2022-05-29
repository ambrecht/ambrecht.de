import { css } from 'styled-components';

export const Gradient = () => css`
  background-image: linear-gradient(
    45deg,
    rgba(35, 147, 255, 1) 0%,
    rgba(95, 29, 242, 1) 100%
  );
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 5));
`;

export const MediaWidth = () => css`
  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

import { css } from 'styled-components';

export const Gradient = () => css`
  background-image: linear-gradient(
    rgba(35, 147, 255, 1) 0%,
    rgba(95, 29, 242, 0.5) 100%
  );
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;

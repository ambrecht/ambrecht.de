import { css } from 'styled-components';

export const TEXT_GRADIENT = () => {
  css`
    background-image: linear-gradient(
      45deg,
      rgba(35, 147, 255, 1) 35%,
      rgba(95, 29, 242, 1) 100%
    );
    -webkit-background-clip: text;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
  `;
};

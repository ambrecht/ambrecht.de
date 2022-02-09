import styled from 'styled-components';

const SvgComponent = function ({ onEnter }, props) {
  return (
    <STYLE>
      <svg viewBox="0 0 1920 1000" {...props}>
        <defs>
          <linearGradient id="a" gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="#2393FF" />
            <stop offset="95%" stopColor="#5F1DFF" />
          </linearGradient>
        </defs>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(1);
          }}
        >
          <path d="M329.167 696.778c-32.4 0-58.667 26.266-58.667 58.666 0 32.401 26.267 58.667 58.667 58.667s58.667-26.266 58.667-58.667c-.001-32.4-26.267-58.666-58.667-58.666zm0 108.667c-27.614 0-50-22.386-50-50.001 0-27.614 22.386-50 50-50s50 22.386 50 50c0 27.616-22.386 50.001-50 50.001z" />
          <path d="M329.167 720.778c-19.146 0-34.667 15.521-34.667 34.666 0 19.146 15.521 34.667 34.667 34.667s34.667-15.521 34.667-34.667c-.001-19.145-15.522-34.666-34.667-34.666zm0 64.212c-16.317 0-29.546-13.228-29.546-29.546 0-16.317 13.229-29.546 29.546-29.546s29.546 13.229 29.546 29.546c-.001 16.319-13.229 29.546-29.546 29.546z" />
          <circle cx={329.167} cy={755.444} r={14.333} />
        </g>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(2);
          }}
        >
          <path d="M972.617 444.118c-32.4 0-58.667 26.266-58.667 58.667s26.267 58.667 58.667 58.667 58.667-26.266 58.667-58.667c0-32.402-26.266-58.667-58.667-58.667zm0 108.667c-27.614 0-50-22.387-50-50.001 0-27.615 22.386-50 50-50s50.001 22.386 50.001 50-22.387 50.001-50.001 50.001z" />
          <path d="M972.617 468.118c-19.146 0-34.667 15.521-34.667 34.667s15.521 34.667 34.667 34.667 34.667-15.521 34.667-34.667c0-19.147-15.521-34.667-34.667-34.667zm0 64.212c-16.317 0-29.546-13.228-29.546-29.546 0-16.318 13.229-29.546 29.546-29.546s29.546 13.228 29.546 29.546c0 16.319-13.228 29.546-29.546 29.546z" />
          <circle cx={972.618} cy={502.784} r={14.333} />
        </g>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(3);
          }}
        >
          <path d="M1266.282 738.109c-32.4 0-58.667 26.266-58.667 58.667 0 32.4 26.267 58.666 58.667 58.666s58.667-26.266 58.667-58.666c0-32.401-26.266-58.667-58.667-58.667zm0 108.667c-27.614 0-50-22.386-50-50 0-27.615 22.386-50.001 50-50.001s50.001 22.386 50.001 50.001-22.387 50-50.001 50z" />
          <path d="M1266.282 762.109c-19.146 0-34.667 15.521-34.667 34.667s15.521 34.666 34.667 34.666 34.667-15.521 34.667-34.666c0-19.146-15.521-34.667-34.667-34.667zm0 64.213c-16.317 0-29.546-13.229-29.546-29.546 0-16.318 13.229-29.546 29.546-29.546s29.546 13.228 29.546 29.546c0 16.318-13.228 29.546-29.546 29.546z" />
          <circle cx={1266.283} cy={796.776} r={14.333} />
        </g>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(4);
          }}
        >
          <path d="M1655.282 697.109c-32.4 0-58.667 26.266-58.667 58.667 0 32.4 26.267 58.666 58.667 58.666s58.667-26.266 58.667-58.666c0-32.401-26.266-58.667-58.667-58.667zm0 108.667c-27.614 0-50-22.386-50-50 0-27.615 22.386-50.001 50-50.001s50.001 22.386 50.001 50.001-22.387 50-50.001 50z" />
          <path d="M1655.282 721.109c-19.146 0-34.667 15.521-34.667 34.667s15.521 34.666 34.667 34.666 34.667-15.521 34.667-34.666c0-19.146-15.521-34.667-34.667-34.667zm0 64.213c-16.317 0-29.546-13.229-29.546-29.546 0-16.318 13.229-29.546 29.546-29.546s29.546 13.228 29.546 29.546c0 16.318-13.228 29.546-29.546 29.546z" />
          <circle cx={1655.283} cy={755.776} r={14.333} />
        </g>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(5);
          }}
        >
          <path d="M688.282 263.109c-32.4 0-58.667 26.266-58.667 58.667s26.267 58.667 58.667 58.667 58.667-26.266 58.667-58.667-26.266-58.667-58.667-58.667zm0 108.667c-27.614 0-50-22.386-50-50s22.386-50 50-50 50.001 22.386 50.001 50-22.387 50-50.001 50z" />
          <path d="M688.282 287.109c-19.146 0-34.667 15.521-34.667 34.667s15.521 34.667 34.667 34.667 34.667-15.521 34.667-34.667-15.521-34.667-34.667-34.667zm0 64.213c-16.317 0-29.546-13.228-29.546-29.546s13.229-29.546 29.546-29.546 29.546 13.228 29.546 29.546-13.228 29.546-29.546 29.546z" />
          <circle cx={688.283} cy={321.776} r={14.333} />
        </g>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(6);
          }}
        >
          <path d="M1544.282 429.109c-32.4 0-58.667 26.266-58.667 58.667s26.267 58.667 58.667 58.667 58.667-26.266 58.667-58.667-26.266-58.667-58.667-58.667zm0 108.667c-27.614 0-50-22.386-50-50s22.386-50 50-50 50.001 22.386 50.001 50-22.387 50-50.001 50z" />
          <path d="M1544.282 453.109c-19.146 0-34.667 15.521-34.667 34.667s15.521 34.667 34.667 34.667 34.667-15.521 34.667-34.667-15.521-34.667-34.667-34.667zm0 64.213c-16.317 0-29.546-13.229-29.546-29.546s13.229-29.546 29.546-29.546 29.546 13.228 29.546 29.546-13.228 29.546-29.546 29.546z" />
          <circle cx={1544.283} cy={487.776} r={14.333} />
        </g>
        <g
          class="button"
          fill="url('#a')"
          onMouseEnter={() => {
            onEnter(7);
          }}
        >
          <path d="M554.638 609.11c-32.4 0-58.667 26.266-58.667 58.666s26.267 58.667 58.667 58.667 58.667-26.267 58.667-58.667-26.267-58.666-58.667-58.666zm0 108.667c-27.614 0-50-22.387-50-50.001s22.386-50 50-50 50 22.386 50 50-22.386 50.001-50 50.001z" />
          <path d="M554.638 633.11c-19.146 0-34.667 15.521-34.667 34.666 0 19.146 15.521 34.667 34.667 34.667s34.667-15.521 34.667-34.667c0-19.145-15.522-34.666-34.667-34.666zm0 64.212c-16.317 0-29.546-13.229-29.546-29.546s13.229-29.546 29.546-29.546 29.546 13.229 29.546 29.546-13.229 29.546-29.546 29.546z" />
          <circle cx={554.638} cy={667.776} r={14.333} />
        </g>
      </svg>
    </STYLE>
  );
};

const STYLE = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  .button {
    opacity: 50%;
    transition: 0.2s;
  }

  .button:hover {
    opacity: 100%;
  }
`;

export default SvgComponent;

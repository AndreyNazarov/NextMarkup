const Email = () => {
  return (
    <svg
      viewBox="0 0 20 23"
      fill="var(--svg-color)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path d="M10 9C11.6575 9 13 7.6575 13 6C13 4.3425 11.6575 3 10 3C8.3425 3 7 4.3425 7 6C7 7.6575 8.3425 9 10 9ZM10 10.5C7.9975 10.5 4 11.505 4 13.5V14.25C4 14.6625 4.3375 15 4.75 15H15.25C15.6625 15 16 14.6625 16 14.25V13.5C16 11.505 12.0025 10.5 10 10.5Z" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-3"
          y="0"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Email;

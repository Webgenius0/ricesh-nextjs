const Clipboard = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={width}
      // height={height}
      viewBox="0 0 72 72"
      fill="none"
      stroke={color}
    >
      <path
        d="M24 36.5996H45"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 48.5996H37.14"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 18H42C48 18 48 15 48 12C48 6 45 6 42 6H30C27 6 24 6 24 12C24 18 27 18 30 18Z"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 12.0605C57.99 12.6005 63 16.2905 63 30.0005V48.0005C63 60.0005 60 66.0005 45 66.0005H27C12 66.0005 9 60.0005 9 48.0005V30.0005C9 16.3205 14.01 12.6005 24 12.0605"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Clipboard;

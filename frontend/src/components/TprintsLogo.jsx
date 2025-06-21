const TprintsLogo = () => {
  return (
    <svg
      width="160"
      height="40"
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tprintGrad" x1="0" y1="0" x2="100%" y2="100%">
          <stop stopColor="#111" />
          <stop offset="1" stopColor="#555" />
        </linearGradient>
      </defs>

      {/* T */}
      <path d="M10 10 H70 V20 H45 V70 H35 V20 H10 Z" fill="url(#tprintGrad)" />

      {/* P */}
      <path d="M80 10 H100 A10 10 0 0 1 110 20 V30 A10 10 0 0 1 100 40 H90 V70 H80 Z" fill="url(#tprintGrad)" />

      {/* R */}
      <path d="M120 10 H140 A10 10 0 0 1 150 20 V30 A10 10 0 0 1 140 40 H130 V45 L150 70 H135 L120 50 Z" fill="url(#tprintGrad)" />

      {/* I */}
      <rect x="160" y="10" width="10" height="60" fill="url(#tprintGrad)" />

      {/* N */}
      <path d="M180 10 H190 L210 45 V10 H220 V70 H210 L190 35 V70 H180 Z" fill="url(#tprintGrad)" />

      {/* T */}
      <path d="M230 10 H290 V20 H265 V70 H255 V20 H230 Z" fill="url(#tprintGrad)" />

      {/* S */}
      <path d="M300 10 H320 V25 H305 V35 H320 V50 H305 V60 H320 V70 H300 V60 H290 V50 H305 V35 H290 V25 H300 Z" fill="url(#tprintGrad)" />
    </svg>
  );
};

export default TprintsLogo ; 
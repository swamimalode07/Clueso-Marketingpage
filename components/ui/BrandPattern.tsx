type BrandPatternProps = {
  id?: string;
  size?: number;
  className?: string;
};

const BrandPattern = ({
  id = "clueso-brand-pattern",
  size = 88,
  className = "",
}: BrandPatternProps) => (
  <svg aria-hidden="true" className={className}>
    <defs>
      <pattern
        id={id}
        width={size}
        height={size}
        patternUnits="userSpaceOnUse"
      >
        <path
          d={`M0 0 H${size} M0 0 V${size} M0 0 L${size} ${size}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

export default BrandPattern;

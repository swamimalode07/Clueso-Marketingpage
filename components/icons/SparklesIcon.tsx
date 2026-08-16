const SparklesIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M11.5 3.2a.5.5 0 0 1 1 0l1.55 5.25a2 2 0 0 0 1.5 1.5L20.8 11.5a.5.5 0 0 1 0 1l-5.25 1.55a2 2 0 0 0-1.5 1.5L12.5 20.8a.5.5 0 0 1-1 0l-1.55-5.25a2 2 0 0 0-1.5-1.5L3.2 12.5a.5.5 0 0 1 0-1l5.25-1.55a2 2 0 0 0 1.5-1.5Z" />
    <path d="M19 4v3" />
    <path d="M20.5 5.5h-3" />
    <path d="M5 17v2" />
    <path d="M6 18H4" />
  </svg>
);

export default SparklesIcon;

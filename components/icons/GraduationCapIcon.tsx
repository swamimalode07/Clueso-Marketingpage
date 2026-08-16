const GraduationCapIcon = ({ className = "" }: { className?: string }) => (
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
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
  </svg>
);

export default GraduationCapIcon;

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const MediaIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m3 15 4-4 5 5" />
    <circle cx="15.5" cy="9" r="1.5" />
  </svg>
);

export const TemplatesIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M10 10v10" />
  </svg>
);

export const TextIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 6h14M12 6v13M9 19h6" />
  </svg>
);

export const ElementsIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
  </svg>
);

export const BrandIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const AudioIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M9 18V5l10-2v13" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="16.5" cy="16" r="2.5" />
  </svg>
);

export const SettingsIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const SplitIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
  </svg>
);

export const TrashIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
  </svg>
);

export const SpeedIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CropIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14" />
  </svg>
);

export const ZoomIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5M8 11h6M11 8v6" />
  </svg>
);

export const SpeakerIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M11 5 6 9H3v6h3l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
  </svg>
);

export const CaptionsIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M10 10.5a2 2 0 1 0 0 3M17 10.5a2 2 0 1 0 0 3" />
  </svg>
);

export const AnimateIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
  </svg>
);

export const PlayIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const ArrowLeftIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const UndoIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 7v6h6" />
    <path d="M3.5 13a9 9 0 1 0 2.1-9.4L3 7" />
  </svg>
);

export const RedoIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M21 7v6h-6" />
    <path d="M20.5 13a9 9 0 1 1-2.1-9.4L21 7" />
  </svg>
);

export const FrameIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
  </svg>
);

export const FullscreenIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 9V5a2 2 0 0 1 2-2h4M21 9V5a2 2 0 0 0-2-2h-4M3 15v4a2 2 0 0 0 2 2h4M21 15v4a2 2 0 0 1-2 2h-4" />
  </svg>
);

export const SendIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const DocumentIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

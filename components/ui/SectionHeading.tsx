import type { ReactNode } from "react";

type SectionHeadingProps = {
  icon?: ReactNode;
  label?: string;
  title: ReactNode;
  subtitle?: string;
  maxWidth?: string;
  className?: string;
};

const SectionHeading = ({
  icon,
  label,
  title,
  subtitle,
  maxWidth = "max-w-200",
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`${maxWidth} ${className}`}>
      {(icon || label) && (
        <div className="flex items-center gap-2 text-brand">
          {icon && (
            <span className="flex size-5 shrink-0 [&>svg]:size-full">{icon}</span>
          )}
          {label && (
            <span className="text-[18px] font-medium leading-[1.5] tracking-[-0.01em]">
              {label}
            </span>
          )}
        </div>
      )}

      <h2 className="mt-4 font-heading text-[44px] font-medium leading-[1.18] tracking-[-0.02em] text-ink lg:text-[58px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-[21px] leading-[1.65] text-muted">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;

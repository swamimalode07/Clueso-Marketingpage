import Link from "next/link";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-brand border border-brand hover:bg-brand/5",
  dark: "bg-ink text-white hover:bg-black",
  outline: "bg-transparent text-ink border border-hairline hover:bg-neutral-50",
  outlineBrand:
    "bg-transparent text-brand border border-brand hover:bg-brand/10",
};

const sizes = {
  sm: "px-4 py-2.5 text-[14px] rounded-md",
  md: "px-5 py-3 text-[15px] rounded-md",
  lg: "px-6 py-3 text-[17px] rounded-lg",
};

type ButtonProps = {
  title: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

const Button = ({
  title,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const styles = `inline-flex items-center justify-center font-medium leading-none tracking-[-0.01em] whitespace-nowrap transition-colors cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {title}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {title}
    </button>
  );
};

export default Button;

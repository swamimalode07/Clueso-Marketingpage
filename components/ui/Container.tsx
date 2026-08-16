import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-320 px-5 ${className}`}>{children}</div>
);

export default Container;

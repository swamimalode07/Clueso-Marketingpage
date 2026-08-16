import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export default Section;

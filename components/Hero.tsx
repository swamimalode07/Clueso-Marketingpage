import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { hero } from "@/content/hero";

const Hero = () => {
  const {
    eyebrow,
    title,
    subtitle,
    primaryAction,
    secondaryAction,
    illustration,
  } = hero;

  return (
    <Section>
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-[15px] font-medium uppercase leading-[1.5] tracking-[0.06em] text-brand">
            {eyebrow}
          </p>

          <h1 className="mt-[22px] font-heading text-[44px] font-medium leading-[1.18] tracking-[-0.02em] text-ink lg:text-[58px]">
            {title}
          </h1>

          <p className="mt-[26px] max-w-140 text-[21px] leading-[1.65] text-muted">
            {subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              title={primaryAction.label}
              href={primaryAction.href}
              variant="primary"
              size="lg"
            />
            <Button
              title={secondaryAction.label}
              href={secondaryAction.href}
              variant="secondary"
              size="lg"
            />
          </div>
        </div>

        <div>
          <Image
            src={illustration.src}
            alt={illustration.alt}
            width={illustration.width}
            height={illustration.height}
            className="mx-auto h-auto w-full max-w-145"
            preload
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;

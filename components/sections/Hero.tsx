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
        <div className="lg:-mt-16">
          <p className="text-[14px] font-medium uppercase leading-[1.5] tracking-[0.06em] text-brand lg:text-[15px]">
            {eyebrow}
          </p>

          <h1 className="mt-[22px] font-heading text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-ink lg:text-[52px]">
            {title}
          </h1>

          <p className="mt-5 max-w-140 text-[17px] leading-[1.65] text-muted lg:text-[19px]">
            {subtitle}
          </p>

          <div className="mt-[30px] flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              title={primaryAction.label}
              href={primaryAction.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            />
            <Button
              title={secondaryAction.label}
              href={secondaryAction.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
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

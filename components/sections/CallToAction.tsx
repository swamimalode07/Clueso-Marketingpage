import BrandPattern from "@/components/ui/BrandPattern";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { cta } from "@/content/cta";

const CallToAction = () => (
  <Section id="get-started">
    <div className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-24 text-center sm:px-10 lg:py-32">
      <BrandPattern className="absolute inset-0 -z-10 size-full text-brand/15 [mask-image:radial-gradient(64%_70%_at_50%_44%,black_0%,black_32%,transparent_88%)]" />

      <h2 className="mx-auto max-w-[16ch] font-heading text-[36px] leading-[1.12] font-medium tracking-[-0.02em] text-white lg:text-[52px]">
        {cta.title}
      </h2>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button
          title={cta.primaryAction.label}
          href={cta.primaryAction.href}
          variant="primary"
          size="lg"
        />
        <Button
          title={cta.secondaryAction.label}
          href={cta.secondaryAction.href}
          variant="outlineBrand"
          size="lg"
        />
      </div>
    </div>
  </Section>
);

export default CallToAction;

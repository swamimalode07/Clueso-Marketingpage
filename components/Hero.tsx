import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-340 px-5 py-16 lg:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-[15px] font-medium uppercase leading-[1.5] tracking-[0.06em] text-brand">
            AI Video generation platform
          </p>

          <h1 className="mt-[22px] font-heading text-[44px] font-medium leading-[1.18] tracking-[-0.02em] text-ink lg:text-[58px]">
            The agentic video creation platform for all teams in your company.
          </h1>

          <p className="mt-[26px] max-w-140 text-[21px] leading-[1.65] text-muted">
            Clueso automates video production for sales, marketing, product, and
            training teams. All your teams get all their videos with one AI
            platform.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              title="Get started for free"
              href="/signup"
              variant="primary"
              size="lg"
            />
            <Button
              title="Book a demo"
              href="/demo"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>

        <div>
          <Image
            src="/assets/svg/Hero.svg"
            alt="Clueso turning a single prompt into product and dev team update videos"
            width={688}
            height={569}
            className="mx-auto h-auto w-full max-w-145"
            preload
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

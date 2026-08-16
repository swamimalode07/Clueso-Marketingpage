"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { CubeIcon } from "@/components/icons";
import UseCasePanel from "./UseCasePanel";
import UseCaseTabs from "./UseCaseTabs";
import { useCases, useCasesHeading } from "@/content/useCases";
import useAutoAdvance from "@/hooks/useAutoAdvance";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const AUTO_ADVANCE_MS = 3500;

const UseCases = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useAutoAdvance({
    length: useCases.length,
    intervalMs: AUTO_ADVANCE_MS,
    paused: paused || prefersReducedMotion,
    setIndex: setActiveIndex,
  });

  const [firstLine, secondLine] = useCasesHeading.titleLines;

  return (
    <Section id="use-cases">
      <SectionHeading
        icon={<CubeIcon />}
        label={useCasesHeading.label}
        title={
          <>
            {firstLine}
            <br />
            {secondLine}
          </>
        }
        subtitle={useCasesHeading.subtitle}
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        className="mt-12 grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-12"
      >
        <UseCaseTabs
          items={useCases}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
        <UseCasePanel
          useCase={useCases[activeIndex]}
          animate={!prefersReducedMotion}
        />
      </div>
    </Section>
  );
};

export default UseCases;

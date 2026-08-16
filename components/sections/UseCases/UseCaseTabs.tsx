"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import type { UseCase } from "@/content/useCases";
import { tabIcons } from "./tabIcons";

const ARROW_KEYS = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

type UseCaseTabsProps = {
  items: UseCase[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const UseCaseTabs = ({ items, activeIndex, onSelect }: UseCaseTabsProps) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!ARROW_KEYS.includes(event.key)) return;

    event.preventDefault();
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const next = (activeIndex + (forward ? 1 : -1) + items.length) % items.length;

    onSelect(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Use cases"
      aria-orientation="vertical"
      onKeyDown={onKeyDown}
      className="flex flex-col gap-1"
    >
      {items.map((item, index) => {
        const Icon = tabIcons[item.id];
        const isActive = index === activeIndex;

        return (
          <button
            key={item.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${item.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-[15px] font-medium tracking-[-0.01em] transition-colors lg:gap-3 lg:px-5 lg:py-4 lg:text-[19px] ${
              isActive
                ? "border-hairline bg-neutral-50 text-ink"
                : "border-transparent text-muted hover:bg-neutral-50 hover:text-ink"
            }`}
          >
            {Icon && (
              <Icon
                className={`size-5 shrink-0 ${
                  isActive ? "text-brand" : "text-neutral-400"
                }`}
              />
            )}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default UseCaseTabs;

import type { UseCase } from "@/content/useCases";

type UseCasePanelProps = {
  useCase: UseCase;
  animate: boolean;
};

const UseCasePanel = ({ useCase, animate }: UseCasePanelProps) => (
  <div
    role="tabpanel"
    id={`panel-${useCase.id}`}
    aria-labelledby={`tab-${useCase.id}`}
    tabIndex={0}
    className="flex flex-col"
  >
    <div
      key={useCase.id}
      className="flex flex-1 flex-col"
      style={animate ? { animation: "fade-in 400ms ease-out both" } : undefined}
    >
      <div className="min-h-80 flex-1 rounded-2xl bg-neutral-100" />
      <p className="mt-5 text-[17px] font-medium text-ink">{useCase.company}</p>
      <p className="mt-1 max-w-160 text-[17px] leading-[1.6] text-muted">
        {useCase.caption}
      </p>
    </div>
  </div>
);

export default UseCasePanel;

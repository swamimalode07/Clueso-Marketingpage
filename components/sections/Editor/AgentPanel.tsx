import { SparklesIcon } from "@/components/icons";
import { agentCopy, agentTasks } from "@/content/editorDemo";
import { CheckIcon, DocumentIcon, SendIcon } from "./editorIcons";

type AgentPanelProps = {
  completed: number;
  progress: number;
  finished: boolean;
  documentReady: boolean;
};

const AgentPanel = ({
  completed,
  progress,
  finished,
  documentReady,
}: AgentPanelProps) => {
  const current = agentTasks[Math.min(completed, agentTasks.length - 1)];

  return (
    <div className="flex flex-col gap-3 border-t border-hairline bg-neutral-50 p-4 lg:border-l lg:border-t-0">
      <div className="flex items-center gap-2 pb-1">
        <SparklesIcon className="size-[18px] text-brand" />
        <span className="text-[14px] leading-none font-medium text-ink">
          {agentCopy.name}
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] leading-none text-muted">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {agentCopy.status}
        </span>
      </div>

      <p className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm bg-brand/10 px-3 py-2.5 text-[13px] leading-[1.5] text-ink">
        {agentCopy.prompt}
      </p>

      <div className="rounded-lg border border-hairline bg-white p-3">
        <p className="text-[13px] leading-[1.5] text-ink">{agentCopy.intro}</p>

        <ul className="mt-3 space-y-2.5">
          {agentTasks.map((task, index) => {
            const isDone = index < completed;
            const isCurrent = index === completed && !finished;

            return (
              <li key={task.id} className="flex items-center gap-2.5">
                <span
                  className={`grid size-4 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                    isDone
                      ? "bg-brand text-white"
                      : isCurrent
                        ? "border-2 border-brand border-t-transparent motion-safe:animate-spin"
                        : "border border-neutral-300"
                  }`}
                >
                  {isDone && <CheckIcon className="size-2.5" />}
                </span>
                <span
                  className={`text-[13px] leading-none transition-colors duration-300 ${
                    isDone || isCurrent ? "text-ink" : "text-neutral-400"
                  }`}
                >
                  {task.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`overflow-hidden rounded-lg border border-hairline bg-white transition-all duration-500 ${
          documentReady ? "max-h-24 opacity-100" : "max-h-0 border-0 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2.5 p-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand/10">
            <DocumentIcon className="size-4 text-brand" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[13px] leading-tight font-medium text-ink">
              Step-by-step guide
            </span>
            <span className="block text-[11px] leading-tight text-muted">
              12 steps · Ready to share
            </span>
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-hairline bg-white p-3">
        <p className="text-[13px] leading-[1.4] font-medium text-ink">
          {finished ? agentCopy.done : `${current.working}...`}
        </p>
        {!finished && (
          <p className="mt-1 text-[12px] leading-[1.4] text-muted">
            {agentCopy.hint}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2.5">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-brand"
              style={{ width: `${finished ? 100 : progress}%` }}
            />
          </div>
          <span className="text-[11px] leading-none tabular-nums text-muted">
            {Math.round(finished ? 100 : progress)}%
          </span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 rounded-lg border border-hairline bg-white px-3 py-2.5">
        <span className="flex-1 text-[13px] leading-[1.4] text-neutral-400">
          {agentCopy.placeholder}
        </span>
        <SendIcon className="size-4 shrink-0 text-brand" />
      </div>
    </div>
  );
};

export default AgentPanel;

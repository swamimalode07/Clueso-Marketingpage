import ScrollFade from "@/components/ui/ScrollFade";
import { agentTasks } from "@/content/editorDemo";
import { CheckIcon } from "./editorIcons";

type StepRailProps = {
  completed: number;
  progress: number;
  finished: boolean;
};

const fillWidth = (
  index: number,
  completed: number,
  progress: number,
  finished: boolean,
) => {
  if (finished || index < completed) return 100;
  if (index === completed) return progress;
  return 0;
};

const StepRail = ({ completed, progress, finished }: StepRailProps) => (
  <ScrollFade>
    <ol className="flex gap-3 pb-px sm:gap-5">
    {agentTasks.map((task, index) => {
      const isDone = finished || index < completed;
      const isActive = !finished && index === completed;

      return (
        <li
          key={task.id}
          className="flex shrink-0 grow basis-auto flex-col items-center"
        >
          <span className="flex items-center gap-1.5">
            <span className="grid size-3.5 shrink-0 place-items-center">
              <CheckIcon
                className={`size-3.5 text-brand transition-all duration-300 ${
                  isDone ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              />
            </span>
            <span
              className={`whitespace-nowrap text-[14px] leading-none tracking-[-0.01em] transition-colors duration-300 ${
                isDone || isActive
                  ? "font-medium text-ink"
                  : "font-normal text-neutral-400"
              }`}
            >
              {task.step}
            </span>
          </span>

          <span className="mt-3.5 h-[3px] w-full overflow-hidden rounded-full bg-neutral-200">
            <span
              className="block h-full rounded-full bg-brand transition-[width] duration-100 ease-linear"
              style={{
                width: `${fillWidth(index, completed, progress, finished)}%`,
              }}
            />
          </span>
        </li>
      );
    })}
    </ol>
  </ScrollFade>
);

export default StepRail;

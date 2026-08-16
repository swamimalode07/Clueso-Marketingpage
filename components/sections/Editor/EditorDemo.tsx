"use client";

import { agentTasks, deriveEditorState } from "@/content/editorDemo";
import useEditorDemo from "@/hooks/useEditorDemo";
import useInView from "@/hooks/useInView";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import AgentPanel from "./AgentPanel";
import EditorPreview from "./EditorPreview";
import EditorSidebar from "./EditorSidebar";
import EditorTimeline from "./EditorTimeline";
import EditorToolbar from "./EditorToolbar";
import EditorTopBar from "./EditorTopBar";
import StepRail from "./StepRail";

const TASK_MS = 1800;
const HOLD_MS = 2600;

const EditorDemo = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { completed, progress, finished } = useEditorDemo({
    taskCount: agentTasks.length,
    taskMs: TASK_MS,
    holdMs: HOLD_MS,
    active: inView && !prefersReducedMotion,
  });

  const resolved = prefersReducedMotion ? agentTasks.length : completed;
  const resolvedProgress = prefersReducedMotion ? 100 : progress;
  const resolvedFinished = prefersReducedMotion ? true : finished;
  const state = deriveEditorState(resolved);

  return (
    <div ref={ref}>
      <StepRail
        completed={resolved}
        progress={resolvedProgress}
        finished={resolvedFinished}
      />

      <div className="mt-7 grid overflow-hidden rounded-2xl border border-hairline bg-white lg:grid-cols-[1fr_320px]">
        <div className="flex min-w-0">
          <EditorSidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <EditorTopBar />
            <EditorPreview state={state} />
            <EditorToolbar state={state} />
            <EditorTimeline state={state} />
          </div>
        </div>

        <AgentPanel
          completed={resolved}
          progress={resolvedProgress}
          finished={resolvedFinished}
          documentReady={state.document}
        />
      </div>
    </div>
  );
};

export default EditorDemo;

import { editorMeta } from "@/content/editorDemo";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  FrameIcon,
  RedoIcon,
  UndoIcon,
} from "./editorIcons";

const EditorTopBar = () => (
  <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
    <ArrowLeftIcon className="size-4 shrink-0 text-neutral-400" />

    <div className="flex min-w-0 items-center gap-1.5">
      <span className="truncate text-[13px] font-medium text-ink">
        {editorMeta.project}
      </span>
      <ChevronDownIcon className="size-3.5 shrink-0 text-neutral-400" />
    </div>

    <div className="ml-auto flex items-center gap-2">
      <UndoIcon className="hidden size-4 text-neutral-400 sm:block" />
      <RedoIcon className="hidden size-4 text-neutral-400 sm:block" />

      <div className="mx-1 hidden h-4 w-px bg-hairline sm:block" />

      <div className="hidden items-center gap-1.5 rounded-md border border-hairline px-2.5 py-1.5 text-[12px] leading-none text-muted md:flex">
        <FrameIcon className="size-3.5" />
        {editorMeta.ratio}
        <ChevronDownIcon className="size-3 text-neutral-400" />
      </div>

      <span className="rounded-md bg-ink px-3 py-1.5 text-[12px] leading-none font-medium text-white">
        Export
      </span>
    </div>
  </div>
);

export default EditorTopBar;

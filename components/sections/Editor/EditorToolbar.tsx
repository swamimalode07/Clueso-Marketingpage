import type { EditorState } from "@/content/editorDemo";
import {
  AnimateIcon,
  CaptionsIcon,
  CropIcon,
  SpeakerIcon,
  SpeedIcon,
  SplitIcon,
  TrashIcon,
  ZoomIcon,
} from "./editorIcons";

const EditorToolbar = ({ state }: { state: EditorState }) => {
  const tools = [
    { label: "Split", Icon: SplitIcon, on: false },
    { label: "Delete", Icon: TrashIcon, on: false },
    { label: "Speed", Icon: SpeedIcon, on: state.pausesRemoved },
    { label: "Crop", Icon: CropIcon, on: false },
    { label: "Zoom", Icon: ZoomIcon, on: state.effects },
    { label: "Audio", Icon: SpeakerIcon, on: false },
    { label: "Captions", Icon: CaptionsIcon, on: state.captions },
    { label: "Animate", Icon: AnimateIcon, on: state.effects },
  ];

  return (
    <div className="flex items-center gap-0.5 overflow-x-auto border-b border-hairline px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {tools.map(({ label, Icon, on }) => (
        <div
          key={label}
          className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] leading-none font-medium transition-colors duration-500 ${
            on ? "bg-neutral-100 text-ink" : "text-muted"
          }`}
        >
          <Icon className="size-3.5" />
          {label}
        </div>
      ))}
    </div>
  );
};

export default EditorToolbar;

import type { ReactNode } from "react";
import type { EditorState } from "@/content/editorDemo";
import { AudioIcon, ZoomIcon } from "./editorIcons";

const ruler = ["00:00", "00:10", "00:20", "00:30", "00:40", "00:50", "01:00"];

const clips = [
  { id: 1, pause: false },
  { id: 2, pause: false },
  { id: 3, pause: true },
  { id: 4, pause: false },
  { id: 5, pause: false },
  { id: 6, pause: true },
  { id: 7, pause: false },
  { id: 8, pause: false },
  { id: 9, pause: true },
  { id: 10, pause: false },
];

const captionBlocks = [
  { id: 1, width: "18%" },
  { id: 2, width: "24%" },
  { id: 3, width: "14%" },
  { id: 4, width: "22%" },
];

const waveform = Array.from({ length: 72 }, (_, index) =>
  Math.round(24 + Math.abs(Math.sin(index * 1.7)) * 64),
);

type TrackProps = {
  label: string;
  icon: ReactNode;
  visible: boolean;
  tone: string;
  children: ReactNode;
};

const Track = ({ label, icon, visible, tone, children }: TrackProps) => (
  <div
    className={`flex items-center gap-2 overflow-hidden rounded-md px-2.5 transition-all duration-500 ${tone} ${
      visible ? "h-8 opacity-100" : "h-0 opacity-0"
    }`}
  >
    <span className="flex w-24 shrink-0 items-center gap-1.5">
      {icon}
      <span className="text-[11px] leading-none font-medium">{label}</span>
    </span>
    <div className="flex min-w-0 flex-1 items-center">{children}</div>
  </div>
);

const EditorTimeline = ({ state }: { state: EditorState }) => (
  <div className="border-t border-hairline bg-neutral-50 px-4 py-3">
    <div className="flex justify-between pb-2 text-[10px] leading-none tabular-nums text-neutral-400">
      {ruler.map((mark) => (
        <span key={mark}>{mark}</span>
      ))}
    </div>

    <div className="flex gap-0.5 overflow-hidden rounded-md">
      {clips.map((clip) => (
        <div
          key={clip.id}
          className={`h-10 shrink-0 transition-all duration-700 ${
            clip.pause && state.pausesRemoved
              ? "w-0 opacity-0"
              : "w-[10%] opacity-100"
          } ${
            clip.pause
              ? "bg-neutral-200"
              : "bg-[linear-gradient(135deg,#3d2542,#8a4780)]"
          }`}
        />
      ))}
    </div>

    <div className="mt-1.5 space-y-1.5">
      <Track
        label="Captions"
        icon={
          <span className="text-[11px] leading-none font-semibold">Aa</span>
        }
        visible={state.captions}
        tone="bg-violet-50 text-violet-600"
      >
        <div className="flex w-full items-center gap-1.5">
          {captionBlocks.map((block) => (
            <span
              key={block.id}
              style={{ width: block.width }}
              className="flex h-5 items-center gap-1 rounded-sm bg-violet-200/70 px-1.5"
            >
              <span className="text-[9px] leading-none font-semibold text-violet-700">
                Aa
              </span>
              <span className="h-[3px] min-w-0 flex-1 rounded-full bg-violet-400/70" />
            </span>
          ))}
        </div>
      </Track>

      <Track
        label="Zoom & Callout"
        icon={<ZoomIcon className="size-3.5" />}
        visible={state.effects}
        tone="bg-brand/8 text-brand"
      >
        <div className="flex w-full items-center justify-around">
          {[0, 1, 2, 3, 4].map((index) => (
            <span key={index} className="size-1.5 rotate-45 bg-brand/70" />
          ))}
        </div>
      </Track>

      <Track
        label="Audio.wav"
        icon={<AudioIcon className="size-3.5" />}
        visible
        tone="bg-emerald-50 text-emerald-600"
      >
        <div className="flex h-4 w-full items-center gap-[2px]">
          {waveform.map((height, index) => (
            <span
              key={index}
              className="w-full rounded-full bg-emerald-300"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </Track>
    </div>
  </div>
);

export default EditorTimeline;

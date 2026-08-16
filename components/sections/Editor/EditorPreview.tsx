import { captionText, editorMeta, type EditorState } from "@/content/editorDemo";
import { FullscreenIcon, PlayIcon, SpeakerIcon } from "./editorIcons";

const stats = [
  { label: "Revenue", value: "$8,240", accent: true },
  { label: "Sessions", value: "12,480", accent: false },
  { label: "Conversion", value: "4.8%", accent: false },
];

const bars = [38, 52, 44, 68, 58, 76, 64, 88, 72, 96];

const EditorPreview = ({ state }: { state: EditorState }) => {
  const accentText = state.branded ? "text-brand" : "text-neutral-900";
  const accentBar = state.branded ? "bg-brand" : "bg-neutral-400";

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
      <div className="absolute inset-0 flex">
        <div className="hidden w-[9%] flex-col gap-[6%] border-r border-neutral-200 bg-white p-[1.6%] sm:flex">
          <div className={`h-[6%] w-full rounded-sm ${accentBar}`} />
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="h-[5%] w-full rounded-sm bg-neutral-200"
            />
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col bg-white">
          <div className="flex items-center justify-between border-b border-neutral-200 px-[3%] py-[2%]">
            <span className="text-[clamp(9px,1.15vw,14px)] font-semibold text-neutral-900">
              Overview
            </span>
            <span className="rounded-sm border border-neutral-200 px-[1.5%] py-[0.6%] text-[clamp(7px,0.85vw,11px)] text-neutral-500">
              Last 30 days
            </span>
          </div>

          <div className="flex gap-[2.5%] px-[3%] py-[2.5%]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 rounded-sm border border-neutral-200 p-[3%]"
              >
                <span className="block text-[clamp(6px,0.8vw,10px)] text-neutral-500">
                  {stat.label}
                </span>
                <span
                  className={`block text-[clamp(10px,1.5vw,19px)] font-semibold transition-colors duration-500 ${
                    stat.accent ? accentText : "text-neutral-900"
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-1 items-end gap-[1.4%] px-[3%] pb-[7%]">
            {bars.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t-sm transition-colors duration-500 ${
                  index === bars.length - 1 ? accentBar : "bg-neutral-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[3%] bottom-[15%] grid aspect-square w-[11%] place-items-center overflow-hidden rounded-full border-2 border-white bg-neutral-200"
      >
        <svg viewBox="0 0 24 24" className="size-[70%] text-neutral-400" fill="currentColor">
          <circle cx="12" cy="9" r="4" />
          <path d="M4 22a8 8 0 0 1 16 0z" />
        </svg>
      </div>

      <div
        className={`absolute right-[3%] top-[4%] flex items-center gap-1.5 rounded-sm border border-neutral-200 bg-white px-[1.6%] py-[0.8%] transition-all duration-500 ${
          state.branded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        <span className="size-[7px] rounded-full bg-brand" />
        <span className="text-[clamp(7px,0.85vw,11px)] font-semibold text-neutral-900">
          {editorMeta.brand}
        </span>
      </div>

      <div
        aria-hidden="true"
        className={`absolute left-[12%] top-[30%] h-[20%] w-[22%] rounded-sm border-2 border-brand transition-all duration-500 ${
          state.effects ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <span className="absolute -top-[9px] left-1 rounded-xs bg-brand px-1 py-px text-[8px] leading-tight font-medium text-white">
          Zoom
        </span>
      </div>

      <div
        className={`absolute left-1/2 bottom-[18%] -translate-x-1/2 rounded-sm bg-neutral-900/90 px-[1.8%] py-[0.9%] transition-all duration-500 ${
          state.captions ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <span className="whitespace-nowrap text-[clamp(9px,1.3vw,17px)] font-semibold text-white">
          {state.translated ? captionText.es : captionText.en}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-neutral-200 bg-white px-3 py-2">
        <PlayIcon className="size-3.5 shrink-0 text-neutral-900" />
        <span className="shrink-0 text-[11px] leading-none tabular-nums text-neutral-500">
          {editorMeta.currentTime} / {editorMeta.duration}
        </span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full rounded-full bg-neutral-900 transition-[width] duration-500"
            style={{ width: state.pausesRemoved ? "34%" : "22%" }}
          />
        </div>
        <SpeakerIcon className="hidden size-3.5 shrink-0 text-neutral-500 sm:block" />
        <FullscreenIcon className="hidden size-3.5 shrink-0 text-neutral-500 sm:block" />
      </div>
    </div>
  );
};

export default EditorPreview;

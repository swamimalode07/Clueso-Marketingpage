import Image from "next/image";
import {
  AudioIcon,
  BrandIcon,
  ElementsIcon,
  MediaIcon,
  SettingsIcon,
  TemplatesIcon,
  TextIcon,
} from "./editorIcons";

const items = [
  { label: "Media", Icon: MediaIcon },
  { label: "Templates", Icon: TemplatesIcon },
  { label: "Text", Icon: TextIcon },
  { label: "Elements", Icon: ElementsIcon },
  { label: "Brand", Icon: BrandIcon },
  { label: "Audio", Icon: AudioIcon },
];

const EditorSidebar = () => (
  <div className="hidden w-18 shrink-0 flex-col items-center border-r border-hairline bg-white py-4 sm:flex">
    <Image
      src="/assets/Clueso.png"
      alt=""
      aria-hidden="true"
      width={32}
      height={32}
      className="mb-5 size-8"
    />

    {items.map(({ label, Icon }) => (
      <div
        key={label}
        className="flex w-full flex-col items-center gap-1.5 py-2.5 text-neutral-500"
      >
        <Icon className="size-[18px]" />
        <span className="text-[10px] leading-none font-medium">{label}</span>
      </div>
    ))}

    <div className="mt-auto flex w-full flex-col items-center gap-1.5 pt-2.5 text-neutral-400">
      <SettingsIcon className="size-[18px]" />
      <span className="text-[10px] leading-none font-medium">Settings</span>
    </div>
  </div>
);

export default EditorSidebar;

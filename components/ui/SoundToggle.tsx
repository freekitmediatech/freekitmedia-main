"use client";

import { useSound } from "@/components/providers/SoundProvider";
import { Icon } from "@/components/ui/Icon";

export function SoundToggle() {
  const { enabled, toggle } = useSound();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Sound on, click to mute" : "Sound off, click to unmute"}
      title={enabled ? "Sound on" : "Sound off"}
      className="grid size-10 cursor-pointer place-items-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
    >
      <Icon name={enabled ? "volume" : "volumeX"} className="size-[1.1rem]" />
    </button>
  );
}

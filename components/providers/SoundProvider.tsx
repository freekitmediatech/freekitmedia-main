"use client";

import type { Howl } from "howler";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type SoundKind = "hover" | "click";

type SoundApi = {
  enabled: boolean;
  toggle: () => void;
  play: (kind: SoundKind) => void;
};

const SoundContext = createContext<SoundApi | null>(null);

const STORAGE_KEY = "fk-sound";

const SOURCES: Record<SoundKind, string> = {
  hover: "/sounds/hover.wav",
  click: "/sounds/click.wav",
};

const VOLUMES: Record<SoundKind, number> = { hover: 0.06, click: 0.12 };

let enabledState = false;
const listeners = new Set<() => void>();

function setEnabledState(value: boolean) {
  enabledState = value;
  listeners.forEach((listener) => listener());
}

function subscribeSound(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

const getSnapshot = () => enabledState;
const getServerSnapshot = () => false;

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const enabled = useSyncExternalStore(subscribeSound, getSnapshot, getServerSnapshot);
  const howls = useRef<Partial<Record<SoundKind, Howl | null>>>({});

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "on" && !enabledState) {
      setEnabledState(true);
    }
  }, []);

  const ensureHowls = useCallback(async () => {
    if (howls.current.hover) return;
    const { Howl: HowlClass } = await import("howler");
    howls.current = {
      hover: new HowlClass({ src: [SOURCES.hover], volume: VOLUMES.hover }),
      click: new HowlClass({ src: [SOURCES.click], volume: VOLUMES.click }),
    };
  }, []);

  const play = useCallback((kind: SoundKind) => {
    howls.current[kind]?.play();
  }, []);

  const toggle = useCallback(() => {
    const next = !enabled;
    window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    setEnabledState(next);
    if (next) void ensureHowls().then(() => play("click"));
  }, [enabled, ensureHowls, play]);

  const api = useMemo<SoundApi>(
    () => ({
      enabled,
      toggle,
      play: (kind) => {
        if (enabled) play(kind);
      },
    }),
    [enabled, toggle, play],
  );

  return (
    <SoundContext.Provider value={api}>{children}</SoundContext.Provider>
  );
}

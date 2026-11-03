import type { ReactElement } from "react";

import { cn } from "@/lib/utils";
import type { VisualKind } from "@/content/service-pages";

const WHITE = "#FFFFFF";
const PLUM = "#171717";
const PLUM_DEEP = "#171717";
const PURPLE = "#8A6C05";
const PURPLE_MID = "#8A6C05";
const PURPLE_SOFT = "#F7C928";
const PURPLE_MIST = "#FFF9E5";
const LINE = "#EAE7DF";
const YELLOW = "#F7C928";
const MUTE = "#55524C";

function Card({
  x,
  y,
  w,
  h,
  rx = 18,
  tilt = 0,
  fill = WHITE,
  shadow = true,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  rx?: number;
  tilt?: number;
  fill?: string;
  shadow?: boolean;
}) {
  const transform = tilt ? ` rotate(${tilt} ${x + w / 2} ${y + h / 2})` : "";
  return (
    <g transform={transform}>
      {shadow && (
        <rect
          x={x + 5}
          y={y + 7}
          width={w}
          height={h}
          rx={rx}
          fill={PLUM_DEEP}
          opacity={0.35}
        />
      )}
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} />
    </g>
  );
}

function LiveDot({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={7} fill={YELLOW} opacity={0.22} />
      <circle cx={cx} cy={cy} r={3.2} fill={YELLOW} />
    </g>
  );
}

function Plus({ x, y }: { x: number; y: number }) {
  return (
    <g stroke={PURPLE_SOFT} strokeWidth={2} strokeLinecap="round" opacity={0.55}>
      <path d={`M ${x - 5} ${y} H ${x + 5}`} />
      <path d={`M ${x} ${y - 5} V ${y + 5}`} />
    </g>
  );
}

function StudioVisual() {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <Plus x={52} y={64} />
      <Plus x={596} y={430} />
      <Plus x={560} y={70} />

      {/* Clapper slate */}
      <g transform="rotate(-6 118 150)">
        <rect x={70} y={166} width={124} height={92} rx={18} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={70} y={166} width={124} height={92} rx={18} fill={PLUM_DEEP} />
        {[-4, -2, 0, 2, 4].map((i) => (
          <path
            key={i}
            d={
              `M ${78 + (i + 4) * 11} 166 L ${88 + (i + 4) * 11} 166 ` +
              `L ${84 + (i + 4) * 11} 184 L ${74 + (i + 4) * 11} 184 Z`
            }
            fill={(i + 4) % 2 ? YELLOW : WHITE}
          />
        ))}
        <rect x={84} y={188} width={100} height={62} rx={8} fill={PLUM_DEEP} />
        <rect x={86} y={196} width={72} height={7} rx={3.5} fill={WHITE} opacity={0.85} />
        <rect x={86} y={212} width={48} height={7} rx={3.5} fill={WHITE} opacity={0.4} />
        <circle cx={170} cy={224} r={9} fill={PURPLE} />
        <path d="M167 221 l6 3 -6 3 z" fill={WHITE} />
      </g>

      {/* Film frame strip */}
      <g>
        <Card x={252} y={56} w={188} h={132} tilt={-3} />
        <rect x={266} y={72} width={96} height={100} rx={12} fill={PURPLE_MIST} transform="rotate(-3 252 56)" />
        <circle cx={314} cy={118} r={26} fill={PURPLE_SOFT} opacity={0.9} />
        <rect x={296} y={64} width={132} height={10} rx={5} fill={PLUM} opacity={0.85} />
        <rect x={296} y={82} width={92} height={7} rx={3.5} fill={MUTE} opacity={0.55} />
        <rect x={296} y={96} width={116} height={7} rx={3.5} fill={MUTE} opacity={0.35} />
      </g>

      <g>
        <Card x={420} y={104} w={150} h={190} tilt={4} />
        <rect x={436} y={124} width={118} height={110} rx={12} fill={PURPLE_MIST} transform="rotate(4 420 104)" />
        <path
          d="M 486 208 c -22 -14 -24 -38 -10 -45 c 16 -8 26 6 26 6 c 10 -14 24 -10 26 2 c 3 16 -18 33 -42 37 z"
          fill={PURPLE}
          opacity={0.85}
          transform="rotate(4 420 104)"
        />
        <rect x={452} y={244} width={64} height={9} rx={4.5} fill={PLUM} opacity={0.85} />
        <rect x={452} y={260} width={42} height={7} rx={3.5} fill={MUTE} opacity={0.5} />
      </g>

      <g>
        <Card x={214} y={252} w={172} h={164} tilt={2} />
        <rect x={228} y={268} width={144} height={94} rx={12} fill={PLUM} transform="rotate(2 214 252)" />
        <rect x={238} y={280} width={78} height={9} rx={4.5} fill={PURPLE_SOFT} transform="rotate(2 214 252)" />
        <rect x={238} y={296} width={110} height={6} rx={3} fill={WHITE} opacity={0.55} transform="rotate(2 214 252)" />
        <rect x={238} y={308} width={88} height={6} rx={3} fill={WHITE} opacity={0.35} transform="rotate(2 214 252)" />
        <rect x={238} y={328} width={56} height={16} rx={8} fill={YELLOW} transform="rotate(2 214 252)" />
        <rect x={228} y={370} width={62} height={30} rx={8} fill={PURPLE_MIST} />
        <rect x={298} y={370} width={62} height={30} rx={8} fill={PURPLE_MIST} />
        <rect x={228} y={379} width={40} height={12} rx={3} fill={PLUM} opacity={0.3} />
        <rect x={298} y={379} width={40} height={12} rx={3} fill={PLUM} opacity={0.3} />
      </g>

      {/* Palette bar */}
      <g>
        <rect x={438} y={352} width={132} height={52} rx={14} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={434} y={348} width={132} height={52} rx={14} fill={WHITE} />
        <rect x={446} y={360} width={22} height={28} rx={6} fill={PLUM} />
        <rect x={472} y={360} width={22} height={28} rx={6} fill={PURPLE} />
        <rect x={498} y={360} width={22} height={28} rx={6} fill={PURPLE_SOFT} />
        <rect x={524} y={360} width={22} height={28} rx={6} fill={YELLOW} />
        <rect x={446} y={391} width={88} height={5} rx={2.5} fill={MUTE} opacity={0.4} />
      </g>

      {/* Measure tape / guide line */}
      <path d="M 60 400 H 176" stroke={PURPLE_SOFT} strokeWidth={2.5} strokeDasharray="2 10" strokeLinecap="round" opacity={0.8} />
      <LiveDot cx={60} cy={400} />
      <path d="M 588 300 v -60" stroke={PURPLE_SOFT} strokeWidth={2.5} strokeDasharray="2 10" strokeLinecap="round" opacity={0.8} />
    </svg>
  );
}

function ConsoleVisual() {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <Plus x={48} y={88} />
      <Plus x={592} y={448} />

      {/* Dashboard */}
      <rect x={72} y={90} width={496} height={360} rx={22} fill={PLUM_DEEP} opacity={0.35} transform="translate(5 7)" />
      <rect x={72} y={84} width={496} height={360} rx={22} fill={WHITE} />
      <rect x={72} y={84} width={496} height={52} rx={22} fill={PLUM} />
      <rect x={72} y={112} width={496} height={24} fill={PLUM} />
      <circle cx={98} cy={110} r={5} fill={PURPLE_SOFT} />
      <circle cx={116} cy={110} r={5} fill={PURPLE} />
      <circle cx={134} cy={110} r={5} fill={YELLOW} />
      <rect x={430} y={101} width={106} height={18} rx={9} fill={PURPLE_MIST} />
      <rect x={443} y={111} width={80} height={5} rx={2.5} fill={MUTE} opacity={0.6} />

      {/* Campaign row 1 */}
      <g>
        <rect x={96} y={162} width={448} height={74} rx={16} fill={PURPLE_MIST} />
        <rect x={110} y={176} width={74} height={46} rx={10} fill={PURPLE} />
        <rect x={122} y={186} width={34} height={7} rx={3.5} fill={WHITE} opacity={0.85} />
        <rect x={122} y={200} width={52} height={6} rx={3} fill={PURPLE_SOFT} />
        <rect x={200} y={176} width={140} height={10} rx={5} fill={PLUM} opacity={0.9} />
        <rect x={200} y={194} width={192} height={7} rx={3.5} fill={MUTE} opacity={0.55} />
        <rect x={200} y={210} width={150} height={7} rx={3.5} fill={MUTE} opacity={0.35} />
        <rect x={442} y={178} width={88} height={22} rx={11} fill={WHITE} />
        <rect x={454} y={186} width={64} height={6} rx={3} fill={PURPLE_MID} opacity={0.8} />
        <rect x={442} y={206} width={88} height={22} rx={11} fill={WHITE} />
        <rect x={454} y={214} width={44} height={6} rx={3} fill={MUTE} opacity={0.45} />
      </g>

      {/* Campaign row 2 */}
      <g>
        <rect x={96} y={250} width={448} height={74} rx={16} fill={PURPLE_MIST} />
        <rect x={110} y={264} width={74} height={46} rx={10} fill={PURPLE_MID} />
        <rect x={122} y={274} width={34} height={7} rx={3.5} fill={WHITE} opacity={0.85} />
        <rect x={122} y={288} width={52} height={6} rx={3} fill={WHITE} opacity={0.5} />
        <rect x={200} y={264} width={120} height={10} rx={5} fill={PLUM} opacity={0.9} />
        <rect x={200} y={282} width={170} height={7} rx={3.5} fill={MUTE} opacity={0.55} />
        <rect x={200} y={298} width={128} height={7} rx={3.5} fill={MUTE} opacity={0.35} />
        <rect x={442} y={266} width={88} height={22} rx={11} fill={WHITE} />
        <rect x={454} y={274} width={64} height={6} rx={3} fill={PURPLE_MID} opacity={0.8} />
        <rect x={442} y={294} width={88} height={22} rx={11} fill={WHITE} />
        <rect x={454} y={302} width={44} height={6} rx={3} fill={MUTE} opacity={0.45} />
      </g>

      {/* Funnel */}
      <g>
        <rect x={96} y={340} width={214} height={82} rx={16} fill={WHITE} stroke={LINE} strokeWidth={2} />
        <rect x={112} y={354} width={168} height={13} rx={6.5} fill={PURPLE_SOFT} />
        <rect x={126} y={375} width={128} height={13} rx={6.5} fill={PURPLE} />
        <rect x={144} y={396} width={88} height={13} rx={6.5} fill={PLUM} />
      </g>

      {/* Cost per enquiry bar */}
      <g>
        <rect x={330} y={340} width={214} height={82} rx={16} fill={PLUM} />
        <rect x={350} y={356} width={112} height={9} rx={4.5} fill={PURPLE_SOFT} opacity={0.85} />
        <rect x={350} y={374} width={150} height={16} rx={8} fill={YELLOW} />
        <path d="M 508 372 l 14 10 -14 10 z" fill={YELLOW} />
        <rect x={350} y={400} width={96} height={5} rx={2.5} fill={WHITE} opacity={0.35} />
      </g>

      {/* Floating chip */}
      <g transform="rotate(6 560 66)">
        <rect x={492} y={36} width={140} height={54} rx={16} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={490} y={32} width={140} height={54} rx={16} fill={WHITE} />
        <circle cx={516} cy={59} r={11} fill={PURPLE_MIST} />
        <rect x={534} y={46} width={70} height={8} rx={4} fill={PLUM} opacity={0.85} />
        <rect x={534} y={62} width={52} height={7} rx={3.5} fill={MUTE} opacity={0.5} />
      </g>
      <LiveDot cx={72} cy={472} />
      <path d="M 96 472 H 240" stroke={PURPLE_SOFT} strokeWidth={2.5} strokeDasharray="2 10" strokeLinecap="round" opacity={0.8} />
    </svg>
  );
}

function DevicesVisual() {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <Plus x={52} y={440} />
      <Plus x={592} y={72} />

      {/* Browser window */}
      <rect x={82} y={74} width={404} height={300} rx={22} fill={PLUM_DEEP} opacity={0.35} />
      <rect x={76} y={68} width={404} height={300} rx={22} fill={WHITE} />
      <rect x={76} y={68} width={404} height={46} rx={22} fill={PLUM} />
      <rect x={76} y={92} width={404} height={22} fill={PLUM} />
      <circle cx={102} cy={91} r={5} fill={PURPLE_SOFT} />
      <circle cx={120} cy={91} r={5} fill={PURPLE} />
      <circle cx={138} cy={91} r={5} fill={YELLOW} />
      <rect x={300} y={83} width={90} height={16} rx={8} fill={PURPLE_MIST} />

      {/* Site skeleton */}
      <rect x={100} y={140} width={356} height={86} rx={14} fill={PURPLE_MIST} />
      <rect x={118} y={158} width={130} height={12} rx={6} fill={PLUM} opacity={0.9} />
      <rect x={118} y={180} width={88} height={28} rx={14} fill={YELLOW} />
      <g opacity={0.9}>
        <rect x={250} y={162} width={100} height={64} rx={10} fill={PURPLE} />
        <rect x={266} y={178} width={48} height={7} rx={3.5} fill={WHITE} opacity={0.8} />
        <rect x={266} y={192} width={66} height={7} rx={3.5} fill={WHITE} opacity={0.45} />
      </g>
      <g opacity={0.9}>
        <rect x={362} y={162} width={76} height={64} rx={10} fill={PURPLE_SOFT} />
        <circle cx={400} cy={190} r={16} fill={WHITE} opacity={0.7} />
      </g>
      {/* three columns */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${100 + i * 122} 244)`}>
          <rect width={112} height={72} rx={12} fill={WHITE} stroke={LINE} strokeWidth={2} />
          <rect x={14} y={14} width={24} height={24} rx={8} fill={i === 1 ? YELLOW : PURPLE_SOFT} />
          <rect x={46} y={18} width={50} height={8} rx={4} fill={PLUM} opacity={0.8} />
          <rect x={14} y={48} width={84} height={6} rx={3} fill={MUTE} opacity={0.45} />
          <rect x={14} y={60} width={62} height={6} rx={3} fill={MUTE} opacity={0.3} />
        </g>
      ))}

      {/* Phone */}
      <g transform="rotate(5 520 320)">
        <rect x={452} y={168} width={150} height={290} rx={26} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={448} y={162} width={150} height={290} rx={26} fill={PLUM} />
        <rect x={503} y={176} width={40} height={8} rx={4} fill={PURPLE_SOFT} opacity={0.6} />
        <rect x={462} y={196} width={122} height={118} rx={12} fill={WHITE} opacity={0.95} />
        <rect x={474} y={210} width={64} height={9} rx={4.5} fill={PLUM} opacity={0.85} />
        <rect x={474} y={228} width={96} height={6} rx={3} fill={MUTE} opacity={0.5} />
        <rect x={474} y={242} width={84} height={6} rx={3} fill={MUTE} opacity={0.35} />
        <g>
          <rect x={474} y={262} width={58} height={20} rx={10} fill={PURPLE_SOFT} />
          <rect x={484} y={271} width={38} height={5} rx={2.5} fill={PLUM} opacity={0.7} />
          <rect x={512} y={288} width={58} height={20} rx={10} fill={PLUM} />
          <rect x={522} y={297} width={38} height={5} rx={2.5} fill={WHITE} opacity={0.7} />
        </g>
        {/* chat bubble */}
        <circle cx={566} cy={352} r={20} fill={YELLOW} />
        <path
          d="M 558 344 h 16 c 3 0 5 2 5 5 v 8 c 0 3 -2 5 -5 5 h -9 l -5 5 v -5 h -2 c -3 0 -5 -2 -5 -5 v -8 c 0 -3 2 -5 5 -5 z"
          fill={PLUM}
        />
      </g>

      {/* GMB pin chip */}
      <g transform="rotate(-7 120 420)">
        <rect x={44} y={392} width={168} height={56} rx={16} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={42} y={388} width={168} height={56} rx={16} fill={WHITE} />
        <circle cx={70} cy={416} r={12} fill={PURPLE_MIST} />
        <path d="M 70 408 c -4.5 0 -8 3.4 -8 7.8 c 0 5.4 8 12.2 8 12.2 s 8 -6.8 8 -12.2 c 0 -4.4 -3.5 -7.8 -8 -7.8 z" fill={PURPLE_MID} />
        <circle cx={70} cy={415.5} r={2.6} fill={WHITE} />
        <rect x={90} y={402} width={96} height={9} rx={4.5} fill={PLUM} opacity={0.85} />
        <rect x={90} y={418} width={66} height={7} rx={3.5} fill={MUTE} opacity={0.5} />
      </g>
      <LiveDot cx={598} cy={136} />
      <path d="M 362 436 h 96" stroke={PURPLE_SOFT} strokeWidth={2.5} strokeDasharray="2 10" strokeLinecap="round" opacity={0.8} />
    </svg>
  );
}

function SpotlightVisual() {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <Plus x={56} y={80} />
      <Plus x={590} y={440} />

      {/* Spotlight cone from top */}
      <path d="M 320 -8 L 176 342 L 464 342 Z" fill={PURPLE_SOFT} opacity={0.16} />
      <path d="M 320 -8 L 236 322 L 404 322 Z" fill={PURPLE_SOFT} opacity={0.18} />

      {/* Portrait frame */}
      <rect x={188} y={92} width={264} height={330} rx={24} fill={PLUM_DEEP} opacity={0.35} />
      <rect x={182} y={86} width={264} height={330} rx={24} fill={PLUM} />
      <rect x={182} y={86} width={264} height={330} rx={24} stroke={PURPLE} strokeWidth={2.5} opacity={0.55} />

      {/* Abstract head & shoulders */}
      <g>
        <circle cx={314} cy={210} r={52} fill={PURPLE_SOFT} opacity={0.9} />
        <path d="M 234 356 c 0 -58 44 -86 80 -86 s 80 28 80 86 v 40 h -160 z" fill={PURPLE} opacity={0.9} />
        <path d="M 314 106 a 96 96 0 0 1 96 96" stroke={PURPLE_SOFT} strokeWidth={3} strokeDasharray="3 12" strokeLinecap="round" opacity={0.7} />
      </g>

      {/* aperture rows */}
      {[248, 274, 300].map((y, i) => (
        <rect key={y} x={252} y={y} width={i === 0 ? 96 : 124} height={9} rx={4.5} fill={WHITE} opacity={0.6 - i * 0.12} />
      ))}
      <circle cx={314} cy={262} r={7} fill={YELLOW} opacity={0.95} />

      {/* Reel cards */}
      <g transform="rotate(-8 96 160)">
        <rect x={40} y={96} width={112} height={150} rx={18} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={36} y={92} width={112} height={150} rx={18} fill={WHITE} />
        <rect x={50} y={108} width={84} height={78} rx={10} fill={PURPLE_MIST} />
        <circle cx={92} cy={147} r={17} fill={PURPLE} />
        <path d="M 87 140 l 13 7 -13 7 z" fill={WHITE} />
        <rect x={50} y={196} width={76} height={8} rx={4} fill={PLUM} opacity={0.8} />
        <rect x={50} y={212} width={56} height={6} rx={3} fill={MUTE} opacity={0.5} />
      </g>

      <g transform="rotate(7 560 180)">
        <rect x={500} y={110} width={112} height={150} rx={18} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={496} y={106} width={112} height={150} rx={18} fill={WHITE} />
        <rect x={510} y={122} width={84} height={78} rx={10} fill={PURPLE_SOFT} opacity={0.7} />
        <circle cx={552} cy={161} r={17} fill={PLUM} />
        <path d="M 547 154 l 13 7 -13 7 z" fill={WHITE} />
        <rect x={510} y={210} width={76} height={8} rx={4} fill={PLUM} opacity={0.8} />
        <rect x={510} y={226} width={56} height={6} rx={3} fill={MUTE} opacity={0.5} />
      </g>

      {/* Reuse-in-ads sticker */}
      <g transform="rotate(4 500 396)">
        <rect x={430} y={368} width={174} height={58} rx={16} fill={PLUM_DEEP} opacity={0.35} />
        <rect x={428} y={364} width={174} height={58} rx={16} fill={YELLOW} />
        <circle cx={452} cy={393} r={12} fill={PLUM} />
        <path d="M 448 399 l 0 -12 10 6 z" fill={YELLOW} />
        <rect x={472} y={378} width={106} height={9} rx={4.5} fill={PLUM} opacity={0.9} />
        <rect x={472} y={394} width={76} height={7} rx={3.5} fill={PLUM} opacity={0.5} />
      </g>

      <LiveDot cx={182} cy={448} />
      <path d="M 206 448 H 360" stroke={PURPLE_SOFT} strokeWidth={2.5} strokeDasharray="2 10" strokeLinecap="round" opacity={0.8} />
      <path d="M 470 40 H 560" stroke={PURPLE_SOFT} strokeWidth={2.5} strokeDasharray="2 10" strokeLinecap="round" opacity={0.7} />
    </svg>
  );
}

const visuals: Record<VisualKind, () => ReactElement> = {
  studio: StudioVisual,
  console: ConsoleVisual,
  devices: DevicesVisual,
  spotlight: SpotlightVisual,
};

export function ServiceVisual({
  kind,
  className,
}: {
  kind: VisualKind;
  className?: string;
}) {
  const Visual = visuals[kind];
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <Visual />
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceVisual } from "@/components/services/visuals";
import {
  otherServices,
  type ServicePage,
  type SignatureStep,
} from "@/content/service-pages";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";
import { cn, whatsappLink } from "@/lib/utils";

const problemAccentStyles = [
  { badge: "bg-[#171717] text-white" },
  { badge: "bg-[#8A6C05] text-white" },
  { badge: "bg-[#F7C928] text-[#171717]" },
  { badge: "bg-[#FFF9E5] text-[#8A6C05] border border-[#8A6C05]/25" },
];

const deliverableCardStyles = [
  { card: "border-[#171717]/10 bg-white", badge: "bg-[#171717] text-white", span: "lg:col-span-7" },
  { card: "border-[#171717]/10 bg-[#FFF9E5]", badge: "bg-[#8A6C05] text-white", span: "lg:col-span-5" },
  { card: "border-[#171717]/10 bg-[#FFF9E5]", badge: "bg-[#8A6C05] text-white", span: "lg:col-span-5" },
  { card: "border-[#171717]/10 bg-white", badge: "bg-[#171717] text-white", span: "lg:col-span-7" },
];

const signatureRowIcons: IconName[] = ["eye", "phone", "trendingUp", "megaphone"];

function SectionMark({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-reveal
      className="flex items-center justify-between gap-4 border-t border-[#171717]/12 pt-4"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6C05]">
        {children}
      </p>
      <span aria-hidden="true" className="font-mono text-xs text-[#77766D]">
        ────
      </span>
    </div>
  );
}

/* ---------------- Signature module ---------------- */

function PipelineModule({
  steps,
  note,
}: {
  steps: SignatureStep[];
  note: string;
}) {
  return (
    <div data-reveal className="mt-12 sm:mt-16">
      <ol className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-6 lg:gap-0">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="relative min-w-0 border-b border-white/10 py-5 pl-14 last:border-b-0 sm:border-b-0 sm:pb-8 sm:pl-0 sm:pt-1 lg:pr-6"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-5 z-10 grid size-9 place-items-center rounded-full bg-[#F7C928] font-mono text-[11px] font-semibold text-[#171717] sm:relative sm:top-0 sm:size-10"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {index < steps.length - 1 && (
              <>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[17px] top-14 w-px bg-white/15 sm:hidden"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-10 top-6 hidden h-px w-full bg-white/15 lg:block"
                />
              </>
            )}

            <p className="font-display text-base font-bold tracking-[-0.03em] text-white sm:mt-5 lg:text-[0.95rem]">
              {step.label}
            </p>
            <p className="mt-2 max-w-[15rem] text-xs leading-relaxed text-white/65 sm:text-[13px]">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-5 max-w-3xl border-t border-white/15 pt-5 text-sm leading-relaxed text-[#FBE17D]/85">
        {note}
      </p>
    </div>
  );
}

function ReportModule({ steps }: { steps: SignatureStep[] }) {
  return (
    <div
      data-reveal
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#FFFFFF] text-[#171717] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.55)]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#171717]/10 bg-[#171717] px-6 py-4 text-white sm:px-8">
        <p className="font-display text-sm font-bold tracking-tight sm:text-base">
          Monthly report
        </p>
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">
          <span className="size-1.5 rounded-full bg-[#F7C928]" />
          Same four. Every month.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2">
        {steps.map((step, index) => {
          const IconComponent = signatureRowIcons[index] ?? "eye";
          return (
            <li
              key={step.label}
              className="flex items-start gap-4 border-b border-[#171717]/8 px-6 py-5 last:border-b-0 sm:px-8 sm:py-6 odd:sm:border-r odd:sm:border-[#171717]/8"
            >
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#FFF9E5] text-[#8A6C05]">
                <Icon name={IconComponent} className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[0.95rem] font-bold tracking-tight">
                  {step.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#55524C] sm:text-[13px]">
                  {step.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FFF9E5] px-6 py-4 sm:px-8">
        <p className="text-xs font-medium text-[#292927] sm:text-[13px]">
          Nothing stays hidden — the report you see is the one we work from.
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7C928] px-3 py-1.5 text-[11px] font-bold text-[#171717]">
          <Icon name="badgeCheck" className="size-3.5" />
          Transparent
        </span>
      </div>
    </div>
  );
}

function BoardModule({ steps }: { steps: SignatureStep[] }) {
  return (
    <div data-reveal>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="rounded-2xl border border-white/10 bg-[#171717]/60 p-5 sm:p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F7C928]/70">
              Channel {String(index + 1).padStart(2, "0")}
            </p>
            <p className="font-display mt-3 text-lg font-bold tracking-[-0.03em] text-white">
              {step.label}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#FBE17D]/75">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 max-w-2xl border-t border-white/10 pt-5 text-sm leading-relaxed text-[#FBE17D]/75">
        All four are maintained together, every month — posting stops being the
        thing everyone forgets.
      </p>
    </div>
  );
}

function PathModule({ steps }: { steps: SignatureStep[] }) {
  return (
    <div data-reveal>
      <ol className="flex flex-col">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-5 pb-8 last:pb-0">
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[1.15rem] top-12 h-[calc(100%-2.75rem)] w-px bg-gradient-to-b from-[#8A6C05]/50 to-transparent"
              />
            )}
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-[#F7C928]/30 bg-[#171717] font-mono text-[11px] text-[#F7C928]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-1">
              <p className="font-display text-lg font-bold tracking-[-0.03em] text-white">
                {step.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#FBE17D]/75">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="max-w-2xl border-t border-white/10 pt-5 text-sm leading-relaxed text-[#FBE17D]/75">
        The first shoot is the hardest. After that, the face stops being
        stage-fright and starts being leverage.
      </p>
    </div>
  );
}

function SignatureModule({ service }: { service: ServicePage }) {
  const { signature } = service;
  const signatureModule =
    signature.kind === "pipeline" ? (
      <PipelineModule steps={signature.steps} note={signature.note} />
    ) : signature.kind === "report" ? (
      <ReportModule steps={signature.steps} />
    ) : signature.kind === "board" ? (
      <BoardModule steps={signature.steps} />
    ) : (
      <PathModule steps={signature.steps} />
    );

  if (signature.kind === "pipeline") {
    return (
      <section className="relative overflow-hidden bg-[#171717] py-16 text-white sm:py-24">
        <Container>
          <header className="grid gap-7 border-t border-white/15 pt-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div data-reveal className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7C928]">
                <span className="size-2 rounded-full bg-[#F7C928]" />
                {signature.kicker}
              </p>

              <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-white">
                {signature.title}
              </h2>
            </div>

            <div data-reveal className="max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                {signature.text}
              </p>

              {service.story && (
                <Link
                  href={service.story.href}
                  className="group mt-5 inline-flex max-w-full items-center gap-2 text-sm font-semibold text-[#F7C928] underline decoration-[#F7C928]/40 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#F7C928] focus-visible:outline-offset-4"
                >
                  <span className="min-w-0">{service.story.label}</span>
                  <Icon
                    name="arrowRight"
                    className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              )}
            </div>
          </header>

          <PipelineModule steps={signature.steps} note={signature.note} />
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#171717] py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[26rem] rounded-full bg-[#8A6C05]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[22rem] rounded-full bg-[#F7C928]/10 blur-[100px]"
      />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start lg:gap-16">
          <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7C928]">
              <span className="size-2 rounded-full bg-[#F7C928]" />
              {signature.kicker}
            </p>

            <h2 className="font-display mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-4xl">
              {signature.title}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#FBE17D]/80 sm:text-base">
              {signature.text}
            </p>

            {service.story && (
              <Link
                href={service.story.href}
                className="group mt-8 block max-w-sm rounded-2xl border border-[#F7C928]/25 bg-[#171717] p-5 transition-colors duration-300 hover:border-[#F7C928]/60 focus-visible:outline-2 focus-visible:outline-[#8A6C05] focus-visible:outline-offset-2"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7C928]">
                  Related story
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#FBE17D]/85">
                  {service.story.text}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {service.story.label}
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </p>
              </Link>
            )}
          </div>

          <div className="min-w-0">{signatureModule}</div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Page ---------------- */

export function ServiceDetail({ service }: { service: ServicePage }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const related = otherServices(service.slug);

  return (
    <main id="main" ref={ref} className="flex-1 bg-[#F7F6F2] text-[#171717]">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-[#171717] pb-14 pt-8 text-white sm:pb-20 sm:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(247,201,40,0.16),transparent_70%)]"
        />

        <Container className="relative">
          <div data-reveal className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#8A6C05] focus-visible:outline-offset-4"
            >
              <Icon
                name="chevronRight"
                className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              All services
            </Link>

            <p className="font-mono text-xs text-white/40">
              Service {service.num} / 04
            </p>
          </div>

          <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-12">
            <div data-reveal className="min-w-0 lg:col-span-7">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7C928]">
                <span className="size-2 rounded-full bg-[#F7C928]" />
                {service.tag}
              </p>

              <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:mt-7">
                {service.title}: {service.headline}
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/70 sm:text-base sm:leading-8">
                {service.sub}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/75"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Get a free audit
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Button>
                <Button
                  href={whatsappLink(
                    site.phone.primary.number,
                    site.whatsapp.ctaText,
                  )}
                  variant="outlineLight"
                  size="lg"
                >
                  Discuss on WhatsApp
                </Button>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-white/50">
                {site.cta.auditNote} Prefer to talk first? Call{" "}
                <a
                  href={`tel:${site.phone.primary.number}`}
                  className="font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                >
                  {site.phone.primary.display}
                </a>
                .
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171717]/40 p-2 sm:p-3">
                <ServiceVisual
                  kind={service.visual}
                  className="aspect-[5/4] w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Problems ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionMark>{service.title} · What it fixes</SectionMark>

          <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <p className="flex items-center gap-2 text-xs font-semibold text-[#8A6C05]">
                <span className="size-2 rounded-full bg-[#8A6C05]" />
                The real reason it feels stuck
              </p>

              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl">
                Where businesses lose customers first.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#55524C]">
                If any of these sound familiar, the fix is system — not more
                effort scattered in the same places.
              </p>
            </div>

            <div data-reveal-stagger className="min-w-0">
              {service.problems.map((problem, index) => (
                <div
                  key={problem.title}
                  data-reveal
                  className="flex items-start gap-4 border-b border-[#171717]/10 py-6 sm:gap-6 sm:py-7"
                >
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-semibold",
                      problemAccentStyles[
                        index % problemAccentStyles.length
                      ].badge,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold tracking-[-0.03em] sm:text-xl">
                      {problem.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[#55524C]">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Deliverables ---------------- */}
      <section className="border-y border-[#171717]/8 bg-white py-16 sm:py-20">
        <Container>
          <SectionMark>Included</SectionMark>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 sm:mt-10">
            <h2
              data-reveal
              className="font-display max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl"
            >
              What this service delivers.
            </h2>

            <p
              data-reveal
              className="max-w-md text-sm leading-7 text-[#55524C]"
            >
              The scope is agreed before anything starts — sized to your
              business and city, then recountable at every monthly review.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {service.deliverables.map((group, index) => {
              const style = deliverableCardStyles[index % deliverableCardStyles.length];
              return (
                <div
                  key={group.group}
                  data-reveal
                  className={cn(
                    "rounded-2xl border p-6 sm:p-7",
                    style.span,
                    style.card,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]",
                      style.badge,
                    )}
                  >
                    {group.group}
                  </span>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#292927]"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 size-4 shrink-0 text-[#8A6C05]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- Signature ---------------- */}
      <SignatureModule service={service} />

      {/* ---------------- Process ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionMark>The path</SectionMark>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 sm:mt-10">
            <h2
              data-reveal
              className="font-display max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl"
            >
              What happens after you contact us.
            </h2>

            <p
              data-reveal
              className="max-w-md text-sm leading-7 text-[#55524C]"
            >
              No mystery, no pressure. This is the route from your first
              message to your first monthly report.
            </p>
          </div>

          <ol
            data-reveal-stagger
            className={cn(
              "mt-10 grid gap-4",
              service.process.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
            )}
          >
            {service.process.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                className="group relative rounded-2xl border border-[#171717]/10 bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="grid size-10 place-items-center rounded-full bg-[#171717] font-mono text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-[#8A6C05]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index === 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9E5] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A6C05]">
                      Step 01 · Free
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-5 text-lg font-bold tracking-[-0.03em] sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#55524C]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Fits ---------------- */}
      <section className="border-y border-[#171717]/8 bg-white py-16 sm:py-20">
        <Container>
          <SectionMark>Fit check</SectionMark>

          <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <p className="flex items-center gap-2 text-xs font-semibold text-[#8A6C05]">
                <span className="size-2 rounded-full bg-[#8A6C05]" />
                Where it works hardest
              </p>

              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl">
                Built for these businesses.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#55524C]">
                We work across Chhattisgarh — Bilaspur, Ambikapur, Korba — and
                with selective online clients beyond the state.
              </p>
            </div>

            <ul data-reveal-stagger className="min-w-0">
              {service.fits.map((fit) => (
                <li
                  key={fit.label}
                  data-reveal
                  className="group flex flex-col gap-3 border-b border-[#171717]/10 py-6 sm:flex-row sm:items-start sm:gap-7 sm:py-7"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#8A6C05]/25 bg-[#FFF9E5] text-[#8A6C05] transition-colors duration-300 group-hover:bg-[#8A6C05] group-hover:text-white">
                    <Icon name={fit.icon} className="size-5" />
                  </span>

                  <div className="min-w-0 sm:w-44 sm:shrink-0">
                    <h3 className="font-display text-lg font-bold tracking-[-0.03em]">
                      {fit.label}
                    </h3>
                  </div>

                  <p className="max-w-xl flex-1 text-sm leading-7 text-[#55524C]">
                    {fit.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionMark>Before you ask</SectionMark>
          <div className="mt-8 sm:mt-10">
            <ServiceFaq faqs={service.faqs} />
          </div>
        </Container>
      </section>

      {/* ---------------- Related ---------------- */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionMark>Where to next</SectionMark>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-[#171717]/10 bg-white px-5 py-4 transition-colors duration-300 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5] focus-visible:outline-2 focus-visible:outline-[#8A6C05] focus-visible:outline-offset-2"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="font-mono text-[11px] text-[#8A6C05]">
                    {item.num}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-base font-bold tracking-[-0.025em] text-[#171717]">
                      {item.title}
                    </span>
                    <span className="block text-xs text-[#55524C]">
                      {item.short}
                    </span>
                  </span>
                </span>

                <Icon
                  name="arrowRight"
                  className="size-4 shrink-0 text-[#55524C] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#8A6C05]"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- CTA band ---------------- */}
      <section className="relative overflow-hidden bg-[#171717] py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-[24rem] rounded-full bg-[#8A6C05]/12 blur-[110px]"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div data-reveal className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7C928]">
                <span className="size-2 rounded-full bg-[#F7C928]" />
                Next step
              </p>

              <h2 className="font-display mt-5 max-w-2xl text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Start with the free audit.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {site.cta.auditNote} We&apos;ll look at your full online
                presence, and you&apos;ll leave with a clear first move — even
                if we never work together.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Get a free audit
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Button>
                <Button
                  href={whatsappLink(
                    site.phone.primary.number,
                    site.whatsapp.ctaText,
                  )}
                  variant="outlineLight"
                  size="lg"
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>

            <div
              data-reveal
              className="min-w-0 rounded-2xl border border-white/10 bg-[#171717]/60 p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F7C928]/70">
                Direct lines
              </p>

              <ul className="mt-4 space-y-3.5 text-sm">
                <li>
                  <a
                    href={`tel:${site.phone.primary.number}`}
                    className="group inline-flex min-h-10 items-center gap-3 text-white/85 transition-colors hover:text-white"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-white/[0.06] text-[#F7C928]">
                      <Icon name="phone" className="size-4" />
                    </span>
                    {site.phone.primary.display}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex min-h-10 items-center gap-3 text-white/85 transition-colors hover:text-white"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-white/[0.06] text-[#F7C928]">
                      <Icon name="mail" className="size-4" />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <span className="grid size-9 place-items-center rounded-xl bg-white/[0.06] text-[#F7C928]">
                    <Icon name="mapPin" className="size-4" />
                  </span>
                  {site.cities.join(", ")}, and online beyond Chhattisgarh
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

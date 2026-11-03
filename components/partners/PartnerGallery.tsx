"use client";

import Image from "next/image";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PartnerReelCard } from "@/components/partners/PartnerReels";
import { partnerVideos } from "@/content/partner-videos";
import { useReveal } from "@/lib/use-reveal";
import type { Partner, PartnerGalleryItem } from "@/content/partners";

function partnerInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function PartnerGalleryPost({
  item,
  partner,
}: {
  item: PartnerGalleryItem;
  partner: Partner;
}) {
  const isImage = item.mediaType === "image";
  const isReel = item.mediaType === "reel";

  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-2">
      <header className="flex min-h-12 items-center gap-3 px-2 py-1">
        <div className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full bg-brand text-xs font-extrabold text-ink ring-2 ring-brand ring-offset-2 ring-offset-white">
          {partner.logo ? (
            <Image
              src={partner.logo}
              alt=""
              fill
              sizes="36px"
              className="bg-white object-contain p-1"
            />
          ) : (
            partnerInitials(partner.name)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold leading-tight text-ink">
            {partner.name}
          </p>
          <p className="truncate text-xs leading-tight text-grey-600">
            {partner.industry} · Campaign
          </p>
        </div>
        <Icon name="instagram" className="size-5 text-ink" />
      </header>

      <div className="relative mt-2 aspect-[4/5] w-full shrink-0 overflow-hidden rounded-xl bg-ink md:aspect-auto md:min-h-0 md:flex-1">
        {isImage ? (
          <div className="relative size-full">
            <Image
              src={item.src ?? item.url ?? ""}
              alt={item.title}
              fill
              sizes="(max-width: 767px) 82vw, (max-width: 1023px) 40vw, 25vw"
              className="object-cover"
            />
          </div>
        ) : isReel && (item.url ?? item.instagramUrl) ? (
          <PartnerReelCard
            reel={{
              title: item.title,
              url: item.url ?? item.instagramUrl ?? "",
              poster: item.poster,
            }}
            className="!aspect-auto !h-full !rounded-xl"
          />
        ) : null}
      </div>

      <div className="flex min-h-12 items-center gap-2 px-2 py-2">
        <Icon
          name={isImage ? "camera" : "play"}
          className="size-4 text-ink"
        />
        <p className="line-clamp-2 text-sm font-medium leading-snug text-ink">
          {item.title}
        </p>
      </div>
    </article>
  );
}

export function PartnerGallery({ partner }: { partner: Partner }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const items: PartnerGalleryItem[] = [
    ...(partnerVideos[partner.slug] ?? []).flatMap((video): PartnerGalleryItem[] => {
      if (video.mediaType === "image") {
        return [{
          id: `${partner.slug}-${video.url}`,
          mediaType: "image",
          url: video.url,
          title: video.title,
        }];
      }

      if (video.poster && video.reelUrl) {
        return [
          {
            id: `${partner.slug}-${video.reelUrl}`,
            mediaType: "reel" as const,
            url: video.reelUrl,
            poster: video.poster,
            title: video.title,
          },
        ];
      }

      return [];
    }),
    ...(partner.reels ?? []).map((reel) => ({
      id: reel.url,
      mediaType: "reel" as const,
      url: reel.url,
      poster: reel.poster,
      title: reel.title,
      instagramUrl: reel.url,
    })),
    ...(partner.gallery ?? []).filter((item) => {
      if (item.mediaType !== "reel") return true;
      const related = (partner.reels ?? []).some(
        (reel) => reel.url === (item.url ?? item.instagramUrl),
      );
      return !related;
    }),
  ];

  if (items.length === 0) {
    return null;
  }

  return (
    <section ref={ref} data-reveal className="bg-mist py-16 sm:py-24">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Campaign gallery
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            Real work, in motion.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-grey-600 sm:text-lg">
            Campaign content and selected Instagram reels from this partnership.
          </p>
        </header>

        <div className="mt-9 flex items-center gap-4 border-y border-ink/10 py-5">
          <div className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-brand text-base font-extrabold text-ink ring-2 ring-brand ring-offset-2 ring-offset-mist">
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt=""
                fill
                sizes="56px"
                className="bg-white object-contain p-2"
              />
            ) : (
              partnerInitials(partner.name)
            )}
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-bold text-ink">
              {partner.name}
            </h3>
            <p className="text-sm text-grey-600">
              {partner.industry} · Campaign feed
            </p>
          </div>
          <Icon name="instagram" className="ml-auto size-6 text-ink" />
        </div>

        <div className="mt-6 grid grid-flow-col auto-cols-[82vw] snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:auto-cols-[22rem] md:grid-flow-row md:auto-cols-auto md:grid-cols-4 md:auto-rows-[15rem] md:overflow-visible md:pb-0">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`snap-start ${
                index === 0 && items.length > 2
                  ? "md:col-span-2 md:row-span-2"
                  : index === 3
                    ? "md:col-span-2"
                    : ""
              }`}
            >
              <PartnerGalleryPost item={item} partner={partner} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-grey-600 md:hidden">
          Swipe to see more posts
        </p>
      </Container>
    </section>
  );
}
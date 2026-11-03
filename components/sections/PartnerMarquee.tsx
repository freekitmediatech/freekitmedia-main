
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/content/partners";

export function PartnerMarquee() {
  const items = [...partners, ...partners];

  return (
    <section
      id="partners"
      aria-label="Our partner brands"
      className="overflow-hidden border-y border-[#171517]/10 bg-white py-8 sm:py-10"
    >
      <div className="brand-marquee relative overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
        />

        <ul className="brand-marquee-track flex w-max items-center">
          {items.map((partner, index) => {
            const duplicate = index >= partners.length;

            return (
              <li
                key={`${partner.slug}-${index}`}
                aria-hidden={duplicate || undefined}
                className="flex h-20 w-44 shrink-0 items-center justify-center px-6 sm:h-24 sm:w-56 sm:px-8"
              >
                <Link
                  href={`/partners/${partner.slug}`}
                  tabIndex={duplicate ? -1 : undefined}
                  aria-label={`View our work with ${partner.name}`}
                  className="flex h-full w-full flex-col items-center justify-center gap-1 outline-offset-4"
                >
                  {partner.logo && (
                    <span className="relative block h-11 w-full max-w-40 bg-white sm:h-14 sm:max-w-48">
                      <Image
                        src={partner.logo}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 128px, 160px"
                        className="object-contain opacity-65 transition duration-300 hover:scale-105 hover:opacity-100 motion-reduce:transition-none"
                      />
                    </span>
                  )}
                  <span className="text-center text-xs font-semibold text-[#171517] sm:text-sm">
                    {partner.name}
                    {partner.franchise && (
                      <span className="ml-1 font-normal text-[#171517]/55">
                        Franchise
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .brand-marquee-track {
          animation: brand-logo-scroll 30s linear infinite;
        }

        .brand-marquee:hover .brand-marquee-track,
        .brand-marquee:focus-within .brand-marquee-track {
          animation-play-state: paused;
        }

        @keyframes brand-logo-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

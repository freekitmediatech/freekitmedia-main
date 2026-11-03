import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { repo } from "@/lib/content";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Digital Marketing Guides",
  description:
    "Practical digital marketing guides from FreeKit Media on content, ads, social media and online growth.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = repo.blog.list();

  return (
    <>
      <SubpageHeader />

      <main id="main" className="flex-1 bg-[#F7F6F2] text-[#171717]">
        {/* Hero */}
        <section className="relative isolate overflow-clip pb-10 pt-14 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_0%,rgba(247,201,40,0.22),transparent_45%),radial-gradient(ellipse_at_90%_10%,rgba(247,201,40,0.12),transparent_45%)]"
          />

          <Container>
            <div className="flex items-center justify-between gap-4 border-t border-[#171717]/15 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
                Blog
              </p>

              <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
                {String(posts.length).padStart(2, "0")} ARTICLES
              </p>
            </div>

            <h1 className="font-display mt-8 max-w-4xl text-balance text-[clamp(2.2rem,7.5vw,5.5rem)] font-semibold leading-[1] tracking-[-0.05em] sm:mt-10 lg:leading-[0.95] lg:tracking-[-0.06em]">
              Digital marketing guides,{" "}
              <span className="text-[#8A6C05]">growth ke logic</span>, jhooth
              ke bina.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-7 text-[#55524C] sm:mt-6 sm:text-lg sm:leading-8">
              Content, ads aur social media ki seedhi baatein. Wahi jo hum
              apne clients ke liye karte hain.
            </p>
          </Container>
        </section>

        {/* Post list */}
        <section className="pb-20 sm:pb-28 lg:pb-36">
          <Container>
            {posts.length === 0 ? (
              <p className="rounded-2xl border border-[#171717]/10 bg-white/70 p-8 text-center text-sm text-[#55524C]">
                Naye articles jaldi aa rahe hain.
              </p>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-[#171717]/10 bg-white/70">
                {posts.map((post, index) => (
                  <article
                    key={post.slug}
                    className="group relative border-b border-[#171717]/10 transition-colors duration-300 last:border-b-0 hover:bg-[#FFF9E5] focus-within:bg-[#FFF9E5]"
                  >
                    <div className="grid grid-cols-[minmax(0,1fr)_2.25rem] items-center gap-4 p-5 sm:grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] sm:gap-6 sm:p-7 lg:grid-cols-[4rem_minmax(0,1fr)_3rem] lg:p-9">
                      {/* Number: sm+ */}
                      <span className="hidden self-start pt-1 font-mono text-xs text-[#77766D] transition-colors group-hover:text-[#8A6C05] sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#77766D] sm:text-xs">
                          <span>{post.updated}</span>
                          <span
                            aria-hidden="true"
                            className="size-1 rounded-full bg-[#8A6C05]/50"
                          />
                          <span>{post.minutes} min read</span>
                        </div>

                        <h2 className="font-display mt-3 text-balance text-xl font-semibold leading-snug tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8A6C05] sm:text-2xl lg:text-3xl">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:decoration-[#8A6C05]/50 focus-visible:underline-offset-4"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        <p className="mt-3 line-clamp-3 max-w-2xl text-pretty text-sm leading-6 text-[#55524C] sm:text-base sm:leading-7">
                          {post.excerpt}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="grid size-9 place-items-center justify-self-end rounded-full border border-[#171717]/15 text-[#55524C] transition-all duration-300 group-hover:border-[#8A6C05] group-hover:bg-[#8A6C05] group-hover:text-white sm:size-11"
                      >
                        <Icon
                          name="arrowRight"
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
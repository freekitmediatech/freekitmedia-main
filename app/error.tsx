"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="flex min-h-svh items-center bg-ink text-paper">
      <Container className="py-24">
        <div className="max-w-xl">
          <span className="inline-block size-2 bg-brand" aria-hidden="true" />
          <h1 className="font-display mt-6 text-h1 leading-[1.06] font-extrabold tracking-[-0.02em]">
            Kuch gadbad ho gayi,{" "}
            <span className="text-brand">dusri koshish karo.</span>
          </h1>
          <p className="mt-5 max-w-md text-lead leading-relaxed text-paper/65">
            Yeh hamari galti hai, aapki nahi. Page dobara load karo — problem
            bani rahe toh seedha WhatsApp par likh do, hum turant dekhte hain.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button onClick={reset}>
              Try again
              <Icon name="arrowRight" className="size-4" />
            </Button>
            <Button href="/" variant="outlineLight">
              Return home
            </Button>
            <a
              href={`https://wa.me/${site.phone.primary.number.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 px-2 text-sm font-medium text-paper/75"
            >
              <Icon name="whatsapp" className="size-4 text-brand" />
              {site.cta.whatsapp}
            </a>
          </div>
          {error.digest ? (
            <p className="mt-8 text-xs text-paper/40">
              Error ref: {error.digest}
            </p>
          ) : null}
        </div>
      </Container>
    </main>
  );
}

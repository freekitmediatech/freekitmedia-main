import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

const channels = [
  {
    icon: "whatsapp",
    label: site.cta.whatsapp,
    href: whatsappLink(site.phone.primary.number, site.whatsapp.ctaText),
    external: true,
  },
  {
    icon: "phone",
    label: site.phone.primary.display,
    href: `tel:${site.phone.primary.number}`,
    external: false,
  },
  {
    icon: "phone",
    label: site.phone.secondary.display,
    href: `tel:${site.phone.secondary.number}`,
    external: false,
  },
  {
    icon: "instagram",
    label: site.instagram.handle,
    href: site.instagram.url,
    external: true,
  },
  {
    icon: "mail",
    label: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
] as const;

export function ContactChannels() {
  return (
    <ul className="border-t border-paper/10">
      {channels.map((channel) => (
        <li key={`${channel.icon}-${channel.label}`}>
          <a
            href={channel.href}
            target={channel.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-3 py-3.5 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
          >
            <Icon name={channel.icon} className="size-4.5 text-brand" />
            {channel.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

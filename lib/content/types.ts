export type StatItem = { value: string; label: string };

export type Block =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "text"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "gallery"; images: { src: string; alt: string }[] }
  | { type: "video"; src: string; poster?: string }
  | { type: "stats"; items: StatItem[] }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; by?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "cta"; title: string; text: string; href: string; label: string };

export type CollectionEntry = {
  slug: string;
  name?: string;
  title?: string;
  industry?: string;
  city?: string;
};

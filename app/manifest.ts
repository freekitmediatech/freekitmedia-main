import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FreeKit Media",
    short_name: "FreeKit",
    description:
      "Chhattisgarh ka full-service digital marketing agency — content, ads, website, branding.",
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F7C928",
    lang: "en-IN",
    icons: [
      {
        src: "/images/logo.jpg",
        sizes: "220x220",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}

import { ImageResponse } from "next/og";
import React from "react";
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export { OG_SIZE as size, OG_CONTENT_TYPE as contentType };

export const alt = "FreeKit Media — digital marketing agency, Chhattisgarh";

export default function OpengraphImage() {
  return new ImageResponse(
    ogCard(React, {
      title: "Aapka brand dikhega, tabhi toh bikega.",
      subtitle:
        "Chhattisgarh ka full-service digital marketing agency — content, ads, website, branding. Sab ek team se.",
    }),
    OG_SIZE,
  );
}

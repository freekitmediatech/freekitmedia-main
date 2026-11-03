const OG_SIZE = { width: 1200, height: 630 };

const OG_CONTENT_TYPE = "image/png";

function ogCard(React, input) {
  const e = React.createElement;
  const titleFont = input.title.length > 40 ? 56 : 66;
  const subtitle =
    input.subtitle && input.subtitle.length > 110
      ? `${input.subtitle.slice(0, 107)}…`
      : input.subtitle;

  return e(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        background: "#171717",
        padding: "64px 72px",
        color: "#ffffff",
      },
    },
    e(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 18 } },
      e(
        "div",
        {
          style: {
            display: "flex",
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#F7C928",
            color: "#171717",
            fontSize: 36,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
          },
        },
        "F",
      ),
      e("div", { style: { display: "flex", fontSize: 30, fontWeight: 600 } }, "FreeKit Media"),
    ),
    e(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: 20 } },
      e("div", {
        style: {
          display: "flex",
          fontSize: titleFont,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 1000,
        },
      }, input.title),
      subtitle
        ? e("div", {
            style: {
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.62)",
              maxWidth: 960,
            },
          }, subtitle)
        : null,
    ),
    e(
      "div",
      { style: { display: "flex", alignItems: "center", fontSize: 24, color: "#F7C928" } },
      "Bilaspur • Ambikapur • Korba",
    ),
  );
}

module.exports = { ogCard, OG_SIZE, OG_CONTENT_TYPE };

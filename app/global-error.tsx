"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-IN">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#171717",
          color: "#ffffff",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Kuch gadbad ho gayi, dusri koshish karo.
          </p>
          <p style={{ marginTop: "0.75rem", opacity: 0.7 }}>
            Yeh hamari galti hai, aapki nahi.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              color: "#171717",
              backgroundColor: "#f7c928",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

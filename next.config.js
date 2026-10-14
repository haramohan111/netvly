/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enables gzip/brotli compression on Next.js's own server output.
  // (On Vercel this is handled by the edge network regardless; this
  // keeps compression on if the app is ever self-hosted.)
  compress: true,
  async headers() {
    const isDev = process.env.NODE_ENV !== "production";

    const securityHeaders = [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          // Next.js's dev server (hot reload / React Refresh) needs eval() —
          // only allow it outside production, or the whole app's client-side
          // JS silently fails to run in `next dev`.
          `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data:",
          `connect-src 'self'${isDev ? " ws:" : ""}`,
          "frame-ancestors 'self'",
        ].join("; "),
      },
    ];

    return [
      {
        // All routes: security headers.
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Static assets: long-lived cache, since filenames are content-hashed.
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Images and icons: cache for a day, revalidate after.
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

module.exports = nextConfig;

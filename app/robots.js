export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/api"],
    },
    sitemap: "https://valora-agent.vercel.app/sitemap.xml",
  };
}

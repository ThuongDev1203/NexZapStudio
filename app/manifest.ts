import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NexZap Studio",
    short_name: "NexZap",
    description: "Game development studio creating innovative gaming experiences",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#004d61",
    icons: [
      {
        src: "/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

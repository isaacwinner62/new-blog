import Image from "next/image"
import dummyData from "@/data/dummy-data.json"

export function SidebarAd() {
  if (!dummyData.ads.sidebar.enabled) {
    return null
  }

  return (
    <div className="ad-container">
      <div className="ad-label">Advertisement</div>
      <Image
        src={dummyData.ads.sidebar.placeholder || "/placeholder.svg"}
        alt={dummyData.ads.sidebar.alt}
        width={300}
        height={250}
        className="w-full"
        loading="lazy"
      />
    </div>
  )
}

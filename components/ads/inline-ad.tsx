import Image from "next/image"
import dummyData from "@/data/dummy-data.json"

interface InlineAdProps {
  position: number
}

export function InlineAd({ position }: InlineAdProps) {
  const adSlot = dummyData.ads.inArticleSlots.find((slot) => slot.position === position)

  if (!adSlot) return null

  return (
    <div className="ad-container my-8">
      <div className="ad-label">Advertisement</div>
      <Image
        src={adSlot.placeholder || "/placeholder.svg"}
        alt="Inline Advertisement"
        width={728}
        height={90}
        className="mx-auto"
        loading="lazy"
      />
    </div>
  )
}

import Image from "next/image"
import dummyData from "@/data/dummy-data.json"

export function LeaderboardAd() {
  if (!dummyData.ads.leaderboard.enabled) {
    return null
  }

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center">
          <div className="ad-container max-w-3xl w-full">
            <div className="ad-label text-center">Advertisement</div>
            <Image
              src={dummyData.ads.leaderboard.placeholder || "/placeholder.svg"}
              alt={dummyData.ads.leaderboard.alt}
              width={728}
              height={90}
              className="mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

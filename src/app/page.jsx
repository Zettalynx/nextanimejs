import AnimeList from "@/components/AnimeList"
import AnimeSide from "@/components/AnimeSide"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import MyComponent from "@/components/AnimeSide/Loadmore"

const HomePage = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=5")
  const seasonNowAnime = await getAnimeResponse("seasons/now", "limit=8")
  const seasonUpcomingAnime = await getAnimeResponse(
    "seasons/upcoming",
    "limit=5"
  )
  // const recommendedAnimeResponse = await getAnimeResponse(
  //   "recommendations/anime"
  // )
  // const recommendedAnimeArray = recommendedAnimeResponse.data // asumsi data berisi array
  // const recommendedAnime = recommendedAnimeArray.slice(0, 4)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 flex md:flex-row flex-col gap-6">
        <div className="lg:w-8/12 md:w-7/12 w-full flex flex-col gap-4">
          <section>
            <Header
              title="Musim Sekarang"
              linkHref="/musim/sekarang"
              linkTitle="Lihat Semua"
            />
            <AnimeList api={seasonNowAnime} />
          </section>
          <section>
            <Header
              title="Anime Rekomendasi"
              linkHref="/rekomendasi"
              linkTitle="Lihat Semua"
            />
            {/* <LoadMore topAnime={recommendedAnime} /> */}
          </section>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full flex flex-col gap-6">
          <section>
            <Header
              title="Anime Teratas"
              linkHref="/topanime"
              linkTitle="Lihat Semua"
            />
            <AnimeSide api={topAnime} />
          </section>
          <section>
            <Header
              title="Mendatang Teratas"
              linkHref="/musim/mendatang"
              linkTitle="Lihat Semua"
            />
            {/* <AnimeSide api={seasonUpcomingAnime} /> */}
            <MyComponent topAnime={seasonUpcomingAnime} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomePage

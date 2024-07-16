import { MotionDiv, transition, variants } from "../Utilities/MotionDiv"
import AnimeCard from "../AnimeCard"
import SkeletonAnimeCard from "../Utilities/SkeletonAnimeCard"

const AnimeList = ({ api }) => {
  if (!api.data) {
    return <SkeletonAnimeCard />
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime, index) => {
        return (
          <MotionDiv
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
            viewport={{ amount: 0 }}
            className="group cursor-pointer text-white transition-all relative rounded-lg overflow-hidden hover:scale-105 shadow hover:shadow-md"
          >
            <AnimeCard api={anime} />
          </MotionDiv>
        )
      })}
    </div>
  )
}

export default AnimeList

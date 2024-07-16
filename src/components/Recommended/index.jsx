import { MotionDiv, transition, variants } from "../Utilities/MotionDiv"
import RecommendedCard from "../RecommendedCard"

const Recommended = ({ api }) => {
  return (
    <div className="dark:text-color-primary text-color-dark">
      <div className="flex flex-col gap-4">
        {api.data?.map((item, index) => (
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
            viewport={{ amount: 0 }}
            key={index}
            className="rounded-md shadow p-2"
          >
            <RecommendedCard item={item} />
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}

export default Recommended

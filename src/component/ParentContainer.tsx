import { FC, useState } from "react"
import RegionPref from "./RegionPref";
import RegionHolder from "./RegionHolder"
import Overlay from "./Overlay"


const ParentContainer: FC = () => {
  const [likeStack, setLikeStack] = useState<number[]>([]);
  const [disLikeStack, setDisLikeStack] = useState<number[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const addToStack = (likeOrDislike, cardNum) => {
    if (likeOrDislike === "like") {
      if (likeStack[likeStack.length - 1] > cardNum) {
        setLikeStack([cardNum])
      } else setLikeStack([...likeStack, cardNum]);
    } else {
      if (disLikeStack[disLikeStack.length - 1] > cardNum) {
        setLikeStack([cardNum])
      } else setDisLikeStack([...disLikeStack, cardNum]);
    }
  }

  return (
    <div className="columns">
      <RegionPref classToAppend="regionLike" state={likeStack} regionTitle="Likes:" />
      <RegionHolder addToStack={addToStack} setOverlay={setShowOverlay} />
      <RegionPref classToAppend="regionDisLike" state={disLikeStack} regionTitle="Dis-likes:" />
      { showOverlay && <Overlay stateLike={likeStack} stateDisLike={disLikeStack} /> || undefined}
    </div>
  )
}

export default ParentContainer;
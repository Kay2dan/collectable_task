import { FC } from "react"
import Card from "./Card";
import { SEED_ASSETS, Asset } from "../data/asset-seed-data"


interface PrefRegionFCType {
  classToAppend: string;
  state: any[];
  regionTitle?: any;
}

const PrefRegion: FC<PrefRegionFCType> = ({ classToAppend, regionTitle, state }) => {
  return (
    <div className={`column is-4 ${classToAppend}`}>
      <h2 className="subtitle m-6 is-size-3">{regionTitle}</h2>
      { state.map((cardNum, i) => {
        const card = SEED_ASSETS[cardNum];
        return (
          <Card styleEffect="cardSmall" currentCard={card} key={i}></Card>
        )
      })}
    </div>
  )
}

export default PrefRegion;
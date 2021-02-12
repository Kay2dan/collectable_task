import { FC, useEffect, useRef, useState } from "react"
import { SEED_ASSETS, Asset } from "../data/asset-seed-data"



const RegionHolder: FC<any> = ({ addToStack, setOverlay }) => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const [showMetrics, setShowMetrics] = useState<boolean>(false)
  const cardCount = useRef(SEED_ASSETS.length).current;

  useEffect(() => {
    // if (activeCard === cardCount) {
    if (activeCard === cardCount) {
      setShowMetrics(true)
    } else {
      setShowMetrics(false)
    }
  }, [activeCard, cardCount, setShowMetrics]);

  const currentCard: Asset = SEED_ASSETS.find((card, i) => {
    if (i === activeCard) {
      return card;
    } else return false;
  }) || undefined;

  const onClickHandler = (likeOrDislike: string) => {
    if (likeOrDislike === "like") {
      addToStack("like", activeCard)
    } else {
      addToStack("disLike", activeCard)
    }
    setActiveCard(activeCard + 1 <= cardCount ? activeCard + 1 : 0);
  }

  return (
    <div className="column is-4 regionHolder">
      <h2 className="subtitle is-size-3 m-3 my-6">Choose your preference:</h2>
      <div className="flexParent">
        {currentCard &&
          <>
            <div className={`cardParent m-6`}>
              <h3 className="title is-size-5 has-text-centered">{currentCard.assetName}</h3>
              <img className="cardImg" src={currentCard.image} alt={currentCard.assetName} />
            </div>
            <div className="controls m-6">
              <button className="button is-primary is-medium mx-3" onClick={() => onClickHandler("like")}>Like</button>
              <button className="button is-danger is-medium mx-3" onClick={() => onClickHandler("dislike")}>Dislike</button>
            </div>
          </>
          || undefined}
        {showMetrics &&
          <div className="metricBtn has-text-centered">
            <button className="button is-info is-medium m-6" onClick={() => setOverlay(true)}>Metrics</button>
          </div>
        }
      </div>
    </div>
  );
};

export default RegionHolder;
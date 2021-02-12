import { FC } from "react"
import { SEED_ASSETS, AssetTag } from "../data/asset-seed-data"


const Overlay = ({ stateLike, stateDisLike }) => {

  const likes = stateLike.map((num) => {
    return (SEED_ASSETS[num])
  })

  const dislikes = stateDisLike.map((num) => {
    return (SEED_ASSETS[num])
  })

  const likeTags = {};
  const dislikeTags = {};

  for (const [propertyKey, propertyValue] of Object.entries(AssetTag)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    likeTags[propertyValue] = 0;
  }

  for (let i = 0; i < likes.length; i++) {
    const cardTags = likes[i].tags;
    cardTags.forEach(t => {
      likeTags[t] = likeTags[t] + 1;
    })
  }

  for (let i = 0; i < dislikes.length; i++) {
    const cardTags = dislikes[i].tags;
    cardTags.forEach(t => {
      dislikeTags[t] = dislikeTags[t] + 1;
    })
  }

  const tagInfo = (key, i) => {
    return (
      <div className="row" key={i}>
        <span className="field p-3">{`${key}:`}</span>
        <span className="field p-3">{likeTags[key]}</span>
      </div>
    )
  }

  return (
    <div className="overlay">
      <div className="columns">
        <div className="m-6 column">
          <h2 className="subtitle is-size-4">Likes: </h2>
          {Object.keys(likeTags).map((key, i) => {
            return tagInfo(key, i);
          })}
        </div>
        <div className="m-6 column ">
          <h2 className="subtitle is-size-4">Dislikes: </h2>
          {Object.keys(dislikeTags).map((key, i) => {
            return tagInfo(key, i);
          })}
        </div>
      </div>
    </div>
  )
}

export default Overlay;
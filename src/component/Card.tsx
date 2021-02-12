import { FC, useEffect, useRef, useState } from "react"

const Card = ({ styleEffect, currentCard }) => {
  return (
    <div className={`cardParent ${styleEffect} m-6`}>
      <h3 className="title is-size-5 has-text-centered">{currentCard.assetName}</h3>
      <img className="cardImg" src={currentCard.image} alt={currentCard.assetName} />
    </div>
  )
}

export default Card;


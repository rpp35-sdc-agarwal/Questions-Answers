import React from 'react';
import Card from './Card.jsx'


const RelatedList = ({products, type, isRelated, ratings, shift, width}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}
      isRelated={isRelated}
      rating={ratings[i]}
      shift={shift}
      width={width}/>
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;
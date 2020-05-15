import React from 'react'

export default function FoodsIndex(props) {
  return (
    <div>
      <h3>Foods list:</h3>
      {props.foods.map((food) => (
        <p>{food.name}</p>
      ))}
    </div>
  )
}

import React from 'react'

export default function FlavorsIndex(props) {
  return (
    <div>
      <h3>Flavors list:</h3>
      {props.flavors.map((flavor) => (
        <p>{flavor.name}</p>
      ))}
    </div>
  )
}

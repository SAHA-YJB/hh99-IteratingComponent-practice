import React from 'react'

function Child({age = 20, name, children}) {
  console.log('나이',age)
  console.log('성명',name)
  console.log('칠드런',children)
  return (
    <div>Child</div>
  )
}

export default Child
import React from 'react'
import useWindowDimensions from '../Hooks/useWindowDimension'

const Charizard = () => {
  const {width} = useWindowDimensions()
  return (
    <div>
        <div  className= 'bullet-wrapper-2'>
        <div className='bullet'>
          <img className='floating-img-handler' src='https://freepngimg.com/save/105777-charizard-png-image-high-quality/1000x689'></img>
        </div>
      </div>
    </div>
  )
}

export default Charizard
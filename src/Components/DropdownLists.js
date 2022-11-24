import React from 'react'

const DropdownLists = ({berry,handleChange}) => {


  return (
    <option onChange={()=>handleChange(berry.name)} value={berry.name} />
  )
}

export default DropdownLists
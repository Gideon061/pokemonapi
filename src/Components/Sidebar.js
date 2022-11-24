import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div>
        <FaBars />
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pokedex'>Pokemon Lists</Link></li>
            <li><Link to='/berry'>Berry Lists</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar
import { Link } from "react-router-dom"
import { IconButton } from "@mui/material"
import { BiCartAlt, BiHomeAlt } from "react-icons/bi"
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  return (
    <div className='nav-bar'>
      <Link to='/' style={location.pathname == '/' ? {pointerEvents: 'none'} : {}}>
        <IconButton size="large" disabled={location.pathname == '/'}>
          <BiHomeAlt />
        </IconButton>
      </Link>
      <Link to='/cart' style={location.pathname == '/cart' ? {pointerEvents: 'none'} : {}}>
        <IconButton size="large" disabled={location.pathname == '/cart'}>
          <BiCartAlt />
        </IconButton>
      </Link>
    </div>
  )
}

export default NavBar
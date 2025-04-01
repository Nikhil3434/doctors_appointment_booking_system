import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {aToken,setAtoken} =  useContext(AdminContext)
    const navgate = useNavigate()
    const logout = () =>{
        navigate('/')
        aToken && setAtoken('')
        aToken && localStorage.removeItem('aToken')
    }
  return (
    <div>
        <div>
            <img src={assets.admin_logo} alt="" />
            <p>
                {aToken ? 'Admin' : 'Doctor'}
            </p>
        </div>
        <button>LOG OUT</button>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const {atoken} = useContext(AdminContext)
  return (
    <div>
{
    atoken && <ul>
        <NavLink to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
        </NavLink>

        <NavLink to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointment</p>
        </NavLink>

        <NavLink to={'/add-doctor'}>
            <img src={assets.add_icon} alt="" />
            <p>Add doctor</p>
        </NavLink>

        <NavLink to={'/-doctors-list'}> 
            <img src={assets.people_icon} alt="" />
            <p>Doctors List</p>
        </NavLink>
    </ul>
}
    </div>
  )
}

export default Sidebar
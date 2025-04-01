import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {

    const [docImg,setDocImg] =  useState(false)
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setpassword]= useState('')
    const [experience,setExperience]= useState('')
    const [fees,setFees]= useState('')
    const [about,setabout]= useState('')
    const [speciality,setSpeciality]= useState('')
    const [degree,setDegree]= useState('')
    const [adress1,setAdress1]= useState('')
    const [adress2,setAdress2]= useState('')
  return (
    <form>

<p>Add Doctor</p>
<div>
    <div>
        <label htmlFor="doc-img">
        <img src={assets.upload_area} alt="" />
        </label>
        <input type="file"  id="doc-img" hidden />
        <p>Upload Doctor <br />picture</p>
    </div>
    <div>
        <div>

            <div>
                <p>your name</p>
                <input type="text" placeholder='Name'  required/>
            </div>
            <div>
                <p>Doctor email</p>
                <input type="mail" placeholder='Email'  required/>
            </div>
             
            <div>
                <p>Doctors password</p>
                <input type="password" placeholder='Password'  required/>
            </div>
            <div>
                <p>Experience</p>
                <select name="" id="">
                    <option value=" 1 Year">1 Year</option>
                    <option value=" 2 Year"></option>
                    <option value=" 3 Year"></option>
                    <option value=" 4 Year"></option>
                    <option value=" 5 Year"></option>
                    <option value="6 Year"></option>
                    <option value="7 Year"></option>
                    <option value="8 Year"></option>
                    <option value="9 Year"></option>
                    <option value="10 Year"></option>
                </select>
            </div>
            <div>
                <p>fees</p>
                <input type="number" placeholder='fees' required />
            </div>
        </div>
        <div>
            <div>
                <p>Specialtiy</p>
                <select name="" id="">
                    <option value="General Physician">General Physician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatricians">Pediatricians</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                
                </select>
            </div>
            <div>
                <p>Education</p>
                <input type="text" placeholder='Education' required />
            </div>
            <div>
                <p>Adress</p>
                <input type="text" placeholder='adress 1' required/>
                <input type="text" placeholder='adress 2' required/>
            </div>
        </div>
    </div>
    <div>
                <p>About Doctor</p>
                <textarea  placeholder='write about doctor' rows={5} required />
            </div>
            <button>Add Doctor</button>
</div>
    </form>
  )
}

export default AddDoctor
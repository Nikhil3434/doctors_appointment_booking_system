import React,{useContext, useState} from 'react'
import {assets} from '../assets/assets'
import { AdminContext } from '../context/AdminContext.jsx'
import axios from 'axios'
const Login = () => {
  const [state,setState]= useState('Admin')
  const [email,setEmail] = useState('')
  const [password,setpassword]= useState('')
  const {setAtoken,backendUrl} = useContext(AdminContext)

  const onSubmitHandler = async () =>{
    event.preventDefault()

    try{
if(state == 'Admin'){
  const {data}= await axios.post(backendUrl + '/api/admin/login',{email, password})
  if(data.success){
    localStorage.setItem('aToken',data.token)
    setAtoken(data.token)
  }else{
    toast.error(data.token)
  }

}else{

}
    }catch(error){

    }
  }


  return (
    <form onSubmit={onSubmitHandler}>
    <div>
      <p><span>{state}</span> Login</p>
      <div>
        <p>Email</p>
        <input onClick={(e)=>setEmail(e.target.value)} value={email} type="email" required/>
      </div>
      <div>
        <p>Password</p>
        <input onClick={(e)=>setpassword(e.target.value)} value={password} type="password" required/>
      </div>
      <button>Login</button>
      {
        state === 'Admin'
        ? <p>Doctor Login <span onClick={()=> setState('Doctor')}>Click here</span></p>
        : <p>Admin Login <span onClick={()=> setState('Admin')}>Click here</span> </p>
      }
    </div>
    </form>
  )
}
export default Login
import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { login } from '../Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    
    const logIn= async (email, password)=>{
        const deta= {email, password}
        try {
            const data = await axios.post('/api/user/login',deta)
            navigate('/')
            localStorage.setItem('user', JSON.stringify(data.data))
            dispatch(login(data.data))
            setloading(false)
            
        } catch (error) {
            setloading(false)
            seterror(error.response.data.error)
          
            
        }

       
    }
  return {logIn, error, loading}
}

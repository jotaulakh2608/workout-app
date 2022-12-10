import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { login } from '../Slices/UserSlice';

export const useSignup = () => {
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);
    const dispatch  = useDispatch()
    
    const signup= async (email, password)=>{
        const deta= {email, password}
        try {
            const data = await axios.post('/api/user/signup',deta)
            localStorage.setItem('user', JSON.stringify(data.data))
            dispatch(login(data.data))
            setloading(false)
            
        } catch (error) {
            setloading(false)
            seterror(error.response.data.error)
        
            
        }

       
    }
  return {signup, error, loading}
}

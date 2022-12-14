import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { login } from '../Slices/UserSlice';
import toast from 'react-hot-toast'

export const useSignup = () => {
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);
    const dispatch  = useDispatch()
    const port = 'https://workoutapp.up.railway.app'
    
    const signup= async (email, password)=>{
        const deta= {email, password}
        try {
            setTimeout(() => {
                toast.success("Signed Up successfully");
              }, 200);
            
            const data = await axios.post(`${port}/api/user/signup`,deta)
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

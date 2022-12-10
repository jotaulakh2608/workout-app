import { logOut } from '../Slices/UserSlice'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { SetWorkout } from '../Slices/WorkoutSlice'
import {toast} from 'react-toastify'

export const useLogout = () => {
  const navigate= useNavigate()
    const dispatch = useDispatch()
    const logout=()=>{
     navigate('/login')
      
        toast.success('Logged Out successfully')
 
        localStorage.removeItem('user')
        dispatch(logOut())
        dispatch(SetWorkout(null))
        

        
    }
  return {logout}
}

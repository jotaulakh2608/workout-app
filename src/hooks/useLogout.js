import { logOut } from '../Slices/UserSlice'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { SetWorkout } from '../Slices/WorkoutSlice'

export const useLogout = () => {
  const navigate= useNavigate()
    const dispatch = useDispatch()
    const logout=()=>{
        localStorage.removeItem('user')
        dispatch(logOut())
        dispatch(SetWorkout(null))

        navigate('/login')
    }
  return {logout}
}

import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import EditWorkoutForm from "../components/EditWorkoutForm";
import WorkoutForm from './WorkoutForm';
import { useDispatch, useSelector } from 'react-redux';
import { Close, Open } from '../Slices/WorkoutSlice';
import {BiDumbbell} from 'react-icons/bi'

export const AddWorkout = ({edit, setedit}) => {
    const open = useSelector((state)=>state.workout.open)
    const dispatch = useDispatch()
  const handleOpen = () => dispatch(Open())
  const handleClose = () => dispatch(Close())
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  return (
    <div> <h4 style={{color:'#1aac83', fontSize:'20px', cursor:'pointer', display:'flex',}} onClick={handleOpen}>
      <span>
      Add Workout
      </span>
      <div style={{marginLeft:'5px', fontSize:'25px'}}>
        <BiDumbbell/>
      </div>
    </h4>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
          <Box sx={style} className='box'>
            {edit?<EditWorkoutForm setEdit={setedit} handleClose={handleClose} edit={edit}/>: <WorkoutForm handleClose={handleClose}/>}
          
          </Box>
        </Fade>
      
    </Modal></div>
  )
}

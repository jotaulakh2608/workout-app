

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useData } from "../hooks/useData";
import { idChange } from "../Slices/UserSlice";
import { useDispatch } from "react-redux";
import { DeleteWorkout, Open } from "../Slices/WorkoutSlice";

const WorkoutDetails = ({ workout, setEdit }) => {
  const dispatch = useDispatch()
  const { User } = useData();
  const port = 'https://workoutapp.up.railway.app'
  const handleClick = async () => {
    if(!User){
      return
    }
    const response = await fetch(`${port}/api/workouts/` + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${User.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch(DeleteWorkout(json))
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <div className="" style={{display:'flex'}}>
      <span className="material-symbols-outlined" style={{right:'60px'}} onClick={()=>{setEdit(true);dispatch(idChange(workout._id));dispatch(Open())}}>
        edit
      </span>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>

      </div>
     
    </div>
  );
};

export default WorkoutDetails;

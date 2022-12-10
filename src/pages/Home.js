import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useData } from "../hooks/useData";
import EditWorkoutForm from "../components/EditWorkoutForm";
import { useDispatch, useSelector } from "react-redux";
import { SetWorkout } from "../Slices/WorkoutSlice";
import { SpinnerCircularFixed } from 'spinners-react';


const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workout.workouts);
  const { User } = useData();
  const [Edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${User.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch(SetWorkout(json));
      }
    };
    if (User) {
      fetchWorkouts();
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts ">
        {!workouts&& <div className="" style={{height:'100%', display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>
   <SpinnerCircularFixed enabled={!workouts} size={60} />

   </div>}
  
    
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              setEdit={setEdit}
              workout={workout}
            />
          ))}
      </div>
      {Edit ? (
        <EditWorkoutForm Edit={Edit} setEdit={setEdit} />
      ) : (
        <WorkoutForm />
      )}
    </div>
  );
};

export default Home;

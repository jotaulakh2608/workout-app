import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import { useData } from "../hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { SetWorkout } from "../Slices/WorkoutSlice";
import { SpinnerCircularFixed } from "spinners-react";
import { AddWorkout } from "../components/AddWorkout";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workout.workouts);
  const { User } = useData();
  const [loading, setloading] = useState(false);
  const [edit, setedit] = useState(false);
  const port = 'https://workoutapp.up.railway.app';
  useEffect(() => {
    const fetchWorkouts = async () => {
      setloading(true);
      const response = await fetch(`${port}/api/workouts`, {
        headers: {
          Authorization: `Bearer ${User.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch(SetWorkout(json));
        setloading(false);
      }
    };
    if (User) {
      fetchWorkouts();
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts ">
        {workouts?.length === 0 && (
          <div
            className=""
            style={{
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {loading ? (
              <SpinnerCircularFixed enabled={loading} size={60} />
            ) : (
              <h3>No Workouts, Tap below to add workouts</h3>
            )}
          </div>
        )}

        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              setEdit={setedit}
              workout={workout}
            />
          ))}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <AddWorkout edit={edit} setedit={setedit} />
        </div>
      </div>
    </div>
  );
};

export default Home;

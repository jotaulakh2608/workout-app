import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useData } from "../hooks/useData";
import { SetWorkout, UpdateWorkout } from "../Slices/WorkoutSlice";

const EditWorkoutForm = ({ setEdit, Edit }) => {
  const { User } = useData();
  const id = useSelector((state) => state.user.id);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getWorkout = async () => {
      const { data } = await axios({
        url: `/api/workouts/${id}`,
        headers: {
          Authorization: `Bearer ${User.token}`,
        },
      });
      setTitle(data.title);
      setLoad(data.load);
      setReps(data.reps);
    };
    getWorkout();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!User) {
      setError("You must be logged in ");
      return;
    }
    setEdit(false)
    const workout = { title, load, reps };

 await axios.patch(`/api/workouts/${id}`, workout, {
      headers: {
        "Authorization": `Bearer ${User.token}`,
      },
    })

    const data = await axios.get('/api/workouts', {headers: {
        "Authorization": `Bearer ${User.token}`,
      }},)
   
   
      dispatch(SetWorkout(data.data))
   
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Edit Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Edit Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EditWorkoutForm;

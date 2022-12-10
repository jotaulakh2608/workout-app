import { Routes, Route, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useData } from "./hooks/useData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const {User}= useData()
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.user)

  // useEffect(() => {
  //   if(User){
  //     dispatch(login(User))
  //   }
  //   console.log(data);
  // }, []);
  
  return(
    <div className="App">
    <Navbar />
    <div className="pages">
      <Routes>

        <Route path="/" element={User?<Home/>:<Navigate to='/login'/>} />
        <Route path="/signup" element={!User?<Signup />:<Navigate to='/'/>} />
        <Route path="/login" element={!User?<Login />:<Navigate to='/'/>} />
        <Route path='*' element={<h1 style={{position:'absolute', top:'0', height:'100vh', width:'100vw', backgroundColor:'white'}}>
Not right page
        </h1>} />
      </Routes>
    </div>
  </div>
  )
}
export default App;

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const {logout}= useLogout()
  const local = JSON.parse(localStorage.getItem('user'))
  const handleClick =()=>{
    logout()
  }


  const style={
    
  }
console.log(window.innerWidth);
  return (
    <header>
      <div className="container">
      < ToastContainer className='toast'  position={'top-center'} autoClose={1000}/>
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            {local?<div style={{display:'flex', alignItems:'center'}}>
              <h4>
              {local.email.split('@')[0].toUpperCase()}
            </h4>
            <button style={{padding:'5px', height:'40px', marginLeft:"15px",cursor:'pointer', border:'1px solid green'}} className="" onClick={handleClick}>
              LOG OUT
            </button>
            </div>:
            <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </>
            }
            
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
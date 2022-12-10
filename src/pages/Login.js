import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {logIn, error, loading}= useLogin()
  const navigate= useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

   await logIn(email, password)
  
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button >Log in</button>
      {error&&<div className="error">
        {error}
      </div> }
    </form>
  )
}

export default Login
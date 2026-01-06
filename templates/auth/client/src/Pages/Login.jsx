import { authService } from '../Services/auth.service'
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

export default function Login() {

  const { login } = useContext(AuthContext)

   const handleSubmit =async(e)=>{

    e.preventDefault();
    // Implement login logic here
    const formData = new FormData(e.target) 
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    } 

    const result = await authService.login(data)
      
    if (result.token) {
   login(result.token)
    console.log("Logged in via context")
  } else {
    console.log("Login failed", result)
  }
    } 
   



  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input type="email" name='email' />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Password</label><br />
          <input type="password" name='password' />
        </div>

        <button style={{ marginTop: '1rem' }}>
          Login
        </button>
      </form>
    </div>
  )
}

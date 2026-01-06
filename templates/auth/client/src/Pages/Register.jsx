import { authService }   from "../Services/auth.service"

export default function Register() {
const handleSubmit =async(e)=>{

    e.preventDefault();
    // Implement register logic here
     const formData = new FormData(e.target)
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  }

  const result = await authService.register(data)
  console.log(result)
   }




  return (
    <div style={{ padding: '2rem' }}>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br />
          <input type="text" name="name" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Email</label><br />
          <input type="email" name="email" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Password</label><br />
          <input type="password" name="password" />
        </div>

        <button style={{ marginTop: '1rem' }}>
          Register
        </button>
      </form>
    </div>
  )
}

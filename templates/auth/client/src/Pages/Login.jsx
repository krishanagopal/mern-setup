
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authService } from "../Services/auth.service"
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    const result = await authService.login(data)

    if (result.token) {
      login(result.token)
      navigate("/dashboard")
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input type="email" name="email" />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Password</label><br />
          <input type="password" name="password" />
        </div>

        <button style={{ marginTop: "1rem" }}>
          Login
        </button>
      </form>
    </div>
  )
}

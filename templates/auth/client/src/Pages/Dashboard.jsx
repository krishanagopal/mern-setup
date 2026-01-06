import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export default function Dashboard() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    console.log("Logged out via context")
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>This is a protected page.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}


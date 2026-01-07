import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Dashboard() {
  const { logout } = useContext(AuthContext)
const navigate = useNavigate()

const handleLogout = () => {
  logout()
  navigate("/login")
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


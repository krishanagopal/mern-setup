
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome</h1>
      <p>This is the home page.</p>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

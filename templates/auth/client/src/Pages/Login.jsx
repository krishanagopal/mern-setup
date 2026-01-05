export default function Login() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>

      <form>
        <div>
          <label>Email</label><br />
          <input type="email" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Password</label><br />
          <input type="password" />
        </div>

        <button style={{ marginTop: '1rem' }}>
          Login
        </button>
      </form>
    </div>
  )
}

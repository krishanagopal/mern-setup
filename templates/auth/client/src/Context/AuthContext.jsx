
import { createContext, useState } from "react"
import { authService } from "../Services/auth.service"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token"))
  )

  const login = (token) => {
    localStorage.setItem("token", token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    authService.logout()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

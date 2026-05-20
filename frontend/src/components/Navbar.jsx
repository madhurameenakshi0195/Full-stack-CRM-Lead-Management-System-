import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#222",
        display: "flex",
        gap: "20px"
      }}
    >
      <Link style={{ color: "white" }} to="/">
        Home
      </Link>

      <Link style={{ color: "white" }} to="/dashboard">
        Dashboard
      </Link>

      <Link style={{ color: "white" }} to="/leads">
        Leads
      </Link>
    </nav>
  )
}

export default Navbar
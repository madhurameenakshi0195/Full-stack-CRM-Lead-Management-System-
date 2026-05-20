import DashboardCards from "../components/DashboardCards"
import Navbar from "../components/Navbar"

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>📊 Dashboard</h1>

        <DashboardCards />
      </div>
    </div>
  )
}

export default Dashboard
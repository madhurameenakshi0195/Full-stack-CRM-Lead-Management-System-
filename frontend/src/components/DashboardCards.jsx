function DashboardCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}
    >
      <div style={cardStyle}>
        <h2>Total Leads</h2>
        <p>25</p>
      </div>

      <div style={cardStyle}>
        <h2>New Leads</h2>
        <p>10</p>
      </div>

      <div style={cardStyle}>
        <h2>Sales</h2>
        <p>15</p>
      </div>
    </div>
  )
}

const cardStyle = {
  background: "#f4f4f4",
  padding: "20px",
  borderRadius: "10px",
  width: "200px"
}

export default DashboardCards
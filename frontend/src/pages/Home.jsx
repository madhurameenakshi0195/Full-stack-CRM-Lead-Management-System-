import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>
          🧚‍♂️🍀  CRM System
        </h1>

        <p style={styles.subtitle}>
          Manage leads, track dashboard analytics,
          and organize customer data easily.
        </p>

        <div style={styles.buttonContainer}>

          <Link to="/dashboard" style={styles.link}>
            <button style={styles.primaryButton}>
              Open Dashboard
            </button>
          </Link>

          <Link to="/leads" style={styles.link}>
            <button style={styles.secondaryButton}>
              Manage Leads
            </button>
          </Link>

        </div>
      </div>

      <div style={styles.featuresContainer}>

        <div style={styles.card}>
          <h2>🌷 Dashboard</h2>

          <p>
            View analytics, total leads,
            and project overview.
          </p>
        </div>

        <div style={styles.card}>
          <h2>🌷Leads</h2>

          <p>
            Add, manage, and organize
            customer leads efficiently.
          </p>
        </div>

        <div style={styles.card}>
          <h2>🌷🎀 Fast Performance</h2>

          <p>
            Happy to usee...
          </p>
        </div>

      </div>

    </div>
  )
}

const styles = {

  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f7fb",
    padding: "40px",
    fontFamily: "Arial"
  },

  hero: {
    textAlign: "center",
    marginTop: "60px"
  },

  title: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "#222"
  },

  subtitle: {
    fontSize: "20px",
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6"
  },

  buttonContainer: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "14px 28px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer"
  },

  secondaryButton: {
    padding: "14px 28px",
    border: "none",
    backgroundColor: "#111827",
    color: "white",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer"
  },

  featuresContainer: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap"
  },

  card: {
    width: "280px",
    backgroundColor: "peach",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },

  link: {
    textDecoration: "none"
  }

}

export default Home
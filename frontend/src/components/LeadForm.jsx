import API from "../services/api"
import { useState } from "react"

function LeadForm({ fetchLeads }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (!name || !email) {
      alert("Please fill all fields")
      return
    }

    try {

      await API.post("/leads", {
        name,
        email
      })

      setName("")
      setEmail("")

      fetchLeads()

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      style={{ marginTop: "20px" }}
    >

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <button style={styles.button}>
        Add Lead
      </button>

    </form>
  )
}

const styles = {

  input: {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  button: {
    padding: "10px 18px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer"
  }

}

export default LeadForm
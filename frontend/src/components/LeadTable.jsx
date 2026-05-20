import { useState } from "react"

function LeadTable({ leads }) {

  const [search, setSearch] = useState("")

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ marginTop: "30px" }}>

      <input
        type="text"
        placeholder="🔍 Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchBar}
      />

      {
        filteredLeads.map((lead) => (

          <div
            key={lead.id}
            style={styles.card}
          >
            <h3>{lead.name}</h3>

            <p>{lead.email}</p>
          </div>

        ))
      }

    </div>
  )
}

const styles = {

  searchBar: {
    width: "300px",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },

  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px"
  }

}

export default LeadTable
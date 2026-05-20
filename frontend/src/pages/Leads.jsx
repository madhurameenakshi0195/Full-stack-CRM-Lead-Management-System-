import { useEffect, useState } from "react"

import API from "../services/api"
import LeadForm from "../components/LeadForm"
import LeadTable from "../components/LeadTable"
import Navbar from "../components/Navbar"

function Leads() {

  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {

    try {

      const response = await API.get("/leads")

      setLeads(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div>

      <Navbar />

      <div style={{ padding: "20px" }}>

        <h1>👥 Leads Management</h1>

        <LeadForm fetchLeads={fetchLeads} />

        <LeadTable leads={leads} />

      </div>

    </div>
  )
}

export default Leads
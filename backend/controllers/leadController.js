const pool = require("../config/db")

 

const getLeads = async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT * FROM leads ORDER BY id ASC"
    )

    res.json(result.rows)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server Error"
    })
  }
}

 

const addLead = async (req, res) => {

  try {

    const { name, email } = req.body

    const newLead = await pool.query(
      "INSERT INTO leads (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    )

    res.json(newLead.rows[0])

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server Error"
    })
  }
}

module.exports = {
  getLeads,
  addLead
}

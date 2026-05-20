import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Leads from "./pages/Leads"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
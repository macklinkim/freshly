import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App

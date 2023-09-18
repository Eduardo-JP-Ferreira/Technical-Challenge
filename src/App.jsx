import { useState } from 'react'
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
function App() {
  const [city, setCity] = useState(null)

  return (
    <PageContainer>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage city={city} setCity={setCity} />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}

const PageContainer = styled.main`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default App

import { useState } from 'react'
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
function App() {
  const [city, setCity] = useState()
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()

  return (
    <PageContainer>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage city={city} setCity={setCity} weather={weather} setWeather={setWeather} forecast={forecast} setForecast={setForecast} />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}

const PageContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default App

import styled from "styled-components"
import Search from "../components/Search.jsx"
import Weather from "../components/Weather.jsx"
import Forecast from "../components/Forecast.jsx"

export default function HomePage({ city, setCity, weather, setWeather, forecast, setForecast }) {

  return (
    <HomeContainer>
      <Title>Levo um casaquinho?</Title>
      <Search city={city} setCity={setCity} setWeather={setWeather} setForecast={setForecast}/>
      <Weather city={city} weather={weather} />
      <Forecast forecast={forecast} />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  color: #3232A6;
  font-size: 50px;
  font-weight: bold;
  margin-top: 50px;
  width: 100%;
  text-align: center;
`
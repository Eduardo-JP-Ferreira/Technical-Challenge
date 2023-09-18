import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"

import Search from "../components/Search.jsx"
import Weather from "../components/Weather.jsx"

export default function HomePage({ city, setCity }) {

  useEffect(() => {
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}`)
    //   .then((res) => {
    //     console.log(res.data)}
    //   )
    //   .catch((err) => alert("não deu"))
    console.log('city:',city)
  }, [])

  return (
    <HomeContainer>
      <Title>Levo um casaquinho?</Title>
      <Search city={city} setCity={setCity} />
      <Weather city={city} />
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
import styled from 'styled-components';
import { useState } from 'react'
import axios from 'axios';

export default function Search({ city, setCity, setWeather, setForecast }) {
  const [inputCity, setInputCity] = useState()
  
  function submit(event) {
    event.preventDefault();
    setCity(`${inputCity}`)

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}`)
      .then((res) => {
        setWeather(res.data)
      })
      .catch((err) => alert("error: Insira uma cidade válida"))
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then((res) => {
        setForecast(res.data)
      })
      .catch((err) => alert("error: Insira uma cidade válida"))
  }

  return (
    <SearchContainer>
      <form onSubmit={submit}>
        <Input placeholder='Digite o Nome da Cidade Desejada' type="name" onChange={e => setInputCity(e.target.value)}/>
        <Button type="submit">Buscar</Button>
      </form>
    </SearchContainer>     
  )
}

const SearchContainer = styled.div`
  height: 25px;
  width: 30%;
  margin-top: 25px;
  min-width: 360px;
  display: flex;
  justify-content: center;
`
const Input = styled.input`
  height: 25px;
  width: 80%;
  min-width: 300px;
`
const Button = styled.button`
  height: 25px;
  min-width: 60px;
`

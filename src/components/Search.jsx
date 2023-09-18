import styled from 'styled-components';
import { useState } from 'react'
import axios from 'axios';

export default function Search({ city, setCity, setWeather }) {
  const [inputCity, setInputCity] = useState()
  

  function submit(event) {
    console.log('clique: ', inputCity)
    event.preventDefault();
    setCity(`${inputCity}`)

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}`)
      .then((res) => {
        console.log(res.data)
        setWeather(res.data)
      })
      .catch((err) => alert("error"))
    console.log('clique2: ', city)
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
  background-color: lightblue;
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

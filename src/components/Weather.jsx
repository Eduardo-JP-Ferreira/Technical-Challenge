import styled from 'styled-components';
import { useState } from 'react'

export default function Weather({ city, weather }) {
  const [input, setInput] = useState("")

  return (
    <WeatherContainer>
      {console.log('weather', weather)}
      <LeftContainer>
        <h1>Agora: {`${weather?.name}`}</h1>
        <h2>Mínima: {`${weather?.main.temp_min}°C`}</h2>
        <h2>Máxima: {`${weather?.main.temp_max}°C`}</h2>
      </LeftContainer>
      <RightContainer>
        <h2>{`${weather?.weather[0].main}`}</h2>
        <h1>{`${weather?.main.temp}°C`}</h1>
      </RightContainer>
    </WeatherContainer>     
  )
}

const WeatherContainer = styled.div`
  background-color: lightblue;
  height: 100px;
  width: 50%;
  margin-top: 25px;
  min-width: 360px;
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  color: white
`
const LeftContainer = styled.div`
  height: 100%;
  width: 50%;
  min-width: 180px;
  /* background-color: lightcoral; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 20px;
    margin-bottom: 10px;
  }
  h2{
    font-size: 12px;
  }
`
const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  min-width: 180px;
  /* background-color: lightgoldenrodyellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  h1{
    font-size: 30px;
    margin-top: 10px;
    
  }
  h2{
    font-size: 15px;
  }
`
const Button = styled.button`
  height: 25px;
  min-width: 60px;
`

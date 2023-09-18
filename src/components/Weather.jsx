import styled from 'styled-components';
import { useState } from 'react'

export default function Weather({ city }) {
  const [input, setInput] = useState("")

  return (
    <WeatherContainer>
      <LeftContainer>
        <h1>Agora: {`London`}</h1>
        <h2>Mínima: {`15.8°C`}</h2>
        <h2>Máxima: {`24.2°C`}</h2>
      </LeftContainer>
      <RightContainer>
        <h2>{`Nublado`}</h2>
        <h1>{`18,2°C`}</h1>
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

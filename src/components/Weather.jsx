import styled from 'styled-components';

export default function Weather({ weather }) {
  const decimalPoint = 1;

  const weatherMapping = {
    Clear: { label: 'Céu aberto', backgroundColor: '#EEDD82' },
    Clouds: { label: 'Nublado', backgroundColor: 'gray' },
    Rain: { label: 'Chovendo', backgroundColor: '#0000CD' },
    Snow: { label: 'Nevando', backgroundColor: 'lightgray' },
    Thunderstorm: { label: 'Tempestade', backgroundColor: 'purple' },
    Drizzle: { label: 'Chuviscando', backgroundColor: 'lightblue' },
    Mist: { label: 'Neblina', backgroundColor: 'lightgray' },
  };
  const weatherCondition = weather?.weather[0].main;
  const conditionInfo = weatherMapping[weatherCondition] || {
    label: 'Desconhecido',
    backgroundColor: 'white',
  };

  return (
    <WeatherContainer style={{ backgroundColor: conditionInfo.backgroundColor }}>
      <LeftContainer>
        <h1>Agora: {`${weather?.name}`}</h1>
        <h2>Mínima: {`${weather?.main.temp_min.toFixed(decimalPoint)}°C`}</h2>
        <h2>Máxima: {`${weather?.main.temp_max.toFixed(decimalPoint)}°C`}</h2>
      </LeftContainer>
      <RightContainer>
        <h2>{`${conditionInfo.label}`}</h2>
        <h1>{`${weather?.main.temp.toFixed(decimalPoint)}°C`}</h1>
      </RightContainer>
    </WeatherContainer>     
  )
}

const WeatherContainer = styled.div`
  height: 100px;
  width: 40%;
  margin-top: 25px;
  min-width: 360px;
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  color: white;
  font-weight: bold;
`
const LeftContainer = styled.div`
  height: 100%;
  width: 50%;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 20px;
    margin-bottom: 10px;
  }
  h2{
    font-size: 14px;
    margin-bottom: 2px;
  }
`
const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  min-width: 150px;
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

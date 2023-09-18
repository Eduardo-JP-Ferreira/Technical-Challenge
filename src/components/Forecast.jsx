import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function Forecast({ forecast }) {
  const data = [];

  const formatarData = (timestamp) => {
    const data_hora = new Date(timestamp * 1000);
    const diaSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'][data_hora.getDay()];
    const dataFormatada = `${data_hora.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    })} (${diaSemana})`;
    return dataFormatada;
  };

  forecast?.list.forEach((e) => {
    const dataObject = {
      name: formatarData(e.dt),
      temp: Number(e.main.temp.toFixed(1)),
    };
    data.push(dataObject);
  });

  return (
    <ForecastContainer>
      <LineChart width={700} height={300} data={data}>
        <Line type="monotone" dataKey="temp" stroke="#FF4500" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ForecastContainer>
  );
}

const ForecastContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 25px;
  min-width: 360px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-family: "Times New Roman", serif;
`;
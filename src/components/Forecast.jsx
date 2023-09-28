import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useState, useEffect } from 'react';

export default function Forecast({ forecast }) {
  const data = [];
  const decimalPoint = 1;

  const [chartWidth, setChartWidth] = useState(500);
  const minWidth = 400;

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(Math.max(window.innerWidth * 0.4, minWidth));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      temp: Number(e.main.temp.toFixed(decimalPoint)),
    };
    data.push(dataObject);
  });

  return forecast ? (    
    <ForecastContainer>
      <div>
          <LineChart width={chartWidth} height={300} data={data} margin={{ top: 5, right: 30, left: -30, bottom: 0 }}>
            <Line type="monotone" dataKey="temp" stroke="#FF4500" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
      </div>
    </ForecastContainer>
  ) : (
    <></>
  );
}

const ForecastContainer = styled.div`
  height: auto;
  width: 40%;
  margin-top: 25px;
  min-width: 360px;
  display: flex;
  justify-content: left;
  font-size: 12px;
  font-family: "Times New Roman", serif;
  @media (max-width: 500px) {
    overflow-x: scroll;
  }
`;

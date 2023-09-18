import styled from 'styled-components';
import { useState } from 'react'

export default function Search({ city, setCity }) {
  const [input, setInput] = useState("")
  function submit(event) {
    console.log('clique: ', input)
    event.preventDefault();
    setCity(`${input}`)
    console.log('clique2: ', city)
  }

  return (
    <SearchContainer>
      <form onSubmit={submit}>
        <Input placeholder='Digite o Nome da Cidade Desejada' type="name" onChange={e => setInput(e.target.value)}/>
        <Button type="submit">Buscar</Button>
      </form>
    </SearchContainer>     
  )
}

const SearchContainer = styled.div`
  height: 25px;
  width: 20%;
  margin-top: 25px;
`
const Input = styled.input`
  height: 25px;
  width: 80%;
`
const Button = styled.button`
  height: 20px;
  width: 20%;
`

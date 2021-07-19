import React, {useState} from 'react'
import Nota from './componentes/notas'
import Resutlado from './componentes/resultado'
import './App.css';

function App() {

  const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [nota3, setNota3] = useState(0)
  const [nota4, setNota4] = useState(0)
  const [media, setMedia] = useState(0)

  return (
    <>
      
      <Nota nota = {nota1}  setNota = {setNota1} /><br/>
      <Nota nota = {nota2}  setNota = {setNota2} /><br/>
      <Nota nota = {nota3}  setNota = {setNota3} /><br/>
      <Nota nota = {nota4}  setNota = {setNota4} /><br/>
      <Resutlado setMedia={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}/>


      <p></p>

    </>
  );
}

export default App;

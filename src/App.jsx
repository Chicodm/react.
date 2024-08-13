
import { useState } from 'react';
import './App.css'

function App() {

  const [contador,setContador] = useState(50)

  let cont = 0;
  
  function tratarClique(){
    cont++;
    console.log(cont);

    // alert("Clicado")
    
  }

  function incrementarContador(){
    setContador(contador + 1)
  }
  return (
    <>
      <h1>HELOO TODES</h1>
      <button onClick={tratarClique}>Clique</button>

      <div>
      {cont}
      </div>

      <div>
      <button onClick={incrementarContador}>Contagem de Genero</button>
      </div>

      <div>
        {contador}
      </div>
    </>
  )
}

export default App

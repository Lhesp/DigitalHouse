import { useState } from 'react';
import Card from './Card';




function App() {

const [convidado, setConvidado] = useState("");
const [numero, setNumero] = useState("");
const [convite, setConvite] = useState([]);
  
  
  function handleSubmit(event) {
    event.preventDefault();

    if(convidado === "" || numero === ""){
     alert("Inválido, os campos não podem ser vazios. Por favor, verifique os dados inseridos no formulário");
     return;
    } if (convidado.length < 3){
      alert("Inválido. Nome deve conter 3 ou mais caracteres. Por favor, verifique os dados inseridos no formulário");
      return;
    } if (numero.length < 6){
      alert("Inválido. Número deve conter mais que 6 caracteres. Por favor, verifique os dados inseridos no formulário");
      return;
    } else {
     setConvite([...convite, {nome:convidado, telefone:numero}])
    }
  }

  return (

    <div className='container'>
      <h1>Gerador de convites</h1>

      <h2>Convidado:</h2>

      <form className='form' onSubmit={handleSubmit}>
        <div className='container_input'>
        <label htmlFor="">Nome:</label>
        <input value={convidado} onChange={(event)=>setConvidado(event.target.value)} />

        <label htmlFor="">Telefone:</label>
        <input value={numero} onChange={(event)=>setNumero(event.target.value)} type="tel" placeholder="22-999999999" pattern="[0-9]{2}-[0-9]{9}"/>
        </div>


        <input type="submit" value="Criar convite"/>
      </form>

       {
        convite.map((pessoa)=>{
          return(
            <Card pessoa={pessoa}/>
          )
        })
      } 
      
    </div>
  )
}

export default App

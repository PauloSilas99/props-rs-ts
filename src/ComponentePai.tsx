import { useState } from 'react'
import ComponenteFilho from './ComponenteFilho';
import './App.css'

const ComponentePai: React.FC = () => {
  const [mensagemDoFilho,setMensagemDoFilho] = useState<String>('Sem mensagem');

  const receberMensagem = (mensagem:string) =>{
    setMensagemDoFilho(mensagem)
  }

  return (
    <>
      <h1>Componente Pai</h1>
      <p>Mensagem do Filho: {mensagemDoFilho}</p>
      <ComponenteFilho enviarMensagem={receberMensagem} />
    </>
  )
}

export default ComponentePai;

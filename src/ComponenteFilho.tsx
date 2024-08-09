import React, { useState } from "react";

interface ComponenteFilhoProps {
    enviarMensagem : (mensagem:string) => void
}

const ComponenteFilho: React.FC<ComponenteFilhoProps> = ({enviarMensagem}) =>{
    // const mensagem = "Olá do componente filho!";
    const [textoComponente,setTextoComponente] = useState<string>('');

    const handleclick = () =>{
        enviarMensagem(textoComponente);
        setTextoComponente('');
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTextoComponente(e.target.value)
    }

    return (
        <div>
            <h2>Componente Filho</h2>

            <input
            type="text" 
            placeholder="Digite a mensagem para o componente pai"
            value={textoComponente}
            onChange={handleInputChange}
            />

            <button onClick={handleclick}>Enviar Mensagem para o Pai</button>
        </div>
    )
}

export default ComponenteFilho;
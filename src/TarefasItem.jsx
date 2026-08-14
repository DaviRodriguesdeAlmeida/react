//TarefasItem.

import { useState } from "react"


const TarefasItem = ({ tarefa, onEditTarefa, onDeleteTarefa }) => {
    const [ isEditing, setIsEditing ] = useState(false)
    const [ novoTexto, setNovoTexto ] = useState(tarefa.texto)

    const handleEdit = () => {
        if ( isEditing ) {
            document.querySelector('input').focus()
            if (novoTexto.trim()) {
                onEditTarefa(tarefa.id, novoTexto)
            }
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }
    
    const handleDelete = () => {
        onDeleteTarefa(tarefa.id)
    }

    return (
        <li>
            { 
            isEditing 
                ? (<input 
                    type="text" 
                    value={novoTexto}
                    onChange={(e) => { setNovoTexto(e.target.value)}}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onEditTarefa(tarefa.id, novoTexto)
                            setIsEditing(false)
                        }
                    }}
                    />) 
                : (<>{novoTexto}</>)
            }
            <button onClick={handleEdit}> Edit </button>
            <button onClick={handleDelete}> Excluir </button>
        </li>
    )
}

export default TarefasItem
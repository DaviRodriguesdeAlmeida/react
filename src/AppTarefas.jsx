// appTarefas.jsx
import { useState } from "react"
import TarefasLista from "./TarefasLista"
import TarefasForm from "./TarefasForm"

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([])
    
    const addTarefa = ( texto ) => {
        const id = Date.now() 
        const novaTarefa = { id, texto } 
        setTarefas([...tarefas, novaTarefa])
    }

    const deleteTarefas = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
    }

    const editTarefas = (id, novoTexto) => {
        setTarefas(tarefas.map((tarefa) => {
            if(tarefa.id === id){
                return {...tarefa, texto: novoTexto}
            }
            return tarefa
        }))
    }

    return (
        <div>
            <h1>Keep React</h1>
            <TarefasForm onAddTarefa={addTarefa}/>
            <TarefasLista onEditTarefa={editTarefas} onDeleteTarefa={deleteTarefas} tarefas={tarefas}/>
        </div>
    );
}

export default AppTarefas
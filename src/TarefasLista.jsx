//TarefasLista.jsx
import TarefasItem from "./TarefasItem"

const TarefasLista = ({ tarefas, onEditTarefa, onDeleteTarefa }) => {

    return (
        <ul>
            {tarefas.map((tarefa) => {
                return (
                    <TarefasItem 
                        key={tarefa.id} 
                        tarefa={tarefa}
                        onEditTarefa={onEditTarefa}
                        onDeleteTarefa={onDeleteTarefa}
                    />
                )
            })}
        </ul>
    )
}

export default TarefasLista
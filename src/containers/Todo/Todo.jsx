import { useRef, useState } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
import { taskPriorityEnum } from '../../enums/task.enum';

const Todo = () => {

    //! State pour stocker la valeur des taches
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Tache de test !',
            desc: 'Il faudra virer cette tache du code quand on a fini :o',
            priority: taskPriorityEnum.urgent, /* low | normal | urgent */
            isDone: false
        }
    ]);

    //! Stockage d'une valeur via un "useRef" pour conserver la valeur de l'id
    const nextTaskId = useRef(2);

    //! Réaction à l'event "onTaskSubmit" du composant "TaskForm"
    const handleNewTask = (data) => {

        // Création d'un objet "task" avec les données du formulaire
        const task = {
            ...data,
            id: nextTaskId.current,
            isDone: false 
        };

        // Incrémentation de la valeur de l'id (Sauvegarder par le "useRef")
        nextTaskId.current++;

        // Modification du state pour y ajouter la nouvelle tache
        setTasks(prevTasks => [...prevTasks, task]);
    };

    //! Rendu du composant
    return (
        <>
            <h1>Correction 🦊</h1>
            <h2>Ajouter une nouvelle tache</h2>
            <TaskForm onTaskSubmit={handleNewTask} />

            <h2>Liste des taches</h2>
            {/* TODO Faire la liste */}
            <p>...</p>
        </>
    );
}

export default Todo;
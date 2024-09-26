import { useId, useState } from 'react';
import './TaskForm.css';
import { taskPriorityEnum } from '../../enums/task.enum';

const TaskForm = ({ onTaskSubmit = () => {} /* NOOP */ }) => {

    //! Id pour le formulaire (→ Accessiblité)
    const inputId = useId();

    //! State pour les valeurs du formulaire (→ Composant controlé)
    const [taskName, setTaskName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState(taskPriorityEnum.normal);

    //! Confirmation du formulaire
    const handleTaskSubmit = (event) => {
        // Déactivation du comportement par defaut du formulaire
        event.preventDefault();

        // Les données du formulaire
        const data = { name: taskName, desc, priority };

        // Envoyer les données vers le composant parent
        onTaskSubmit(data);

        // Reset du formulaire
        setTaskName('');
        setDesc('');
        setPriority(taskPriorityEnum.normal);
    };

    //! Rendu
    return (
        <form className='taskform' onSubmit={handleTaskSubmit}>
            <label htmlFor={ inputId + 'name'}>Nom</label>
            <input className='taskform__name' id={inputId+ 'name'} type='text'
                value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <label htmlFor={inputId + 'desc'}>Description</label>
            <textarea className='taskform__desc' id={inputId + 'desc'} 
                value={desc} onChange={(e) => setDesc(e.target.value)} />
            <label htmlFor={inputId + 'priority'}>Priorité</label>
            <select className='taskform__priority' id={inputId + 'priority'}
                value={priority} onChange={(e) => setPriority(e.target.value)}
            >
                <option value={taskPriorityEnum.low}>Basse</option>
                <option value={taskPriorityEnum.normal}>Normal</option>
                <option value={taskPriorityEnum.urgent}>Urgente</option>
            </select>
            <button className='taskform__submit' type='submit'>Ajouter</button>
        </form>
    );
};

export default TaskForm;
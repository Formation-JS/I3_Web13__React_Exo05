import { useState } from 'react';

const Todo = () => {

    const [tasks, setTasks] = useState([
        {
            id: 'Zuzana42',
            name: 'Tache de test !',
            desc: 'Il faudra virer cette tache du code quand on a fini :o',
            priority: 'urgent', /* low | normal | urgent */
            isDone: false
        }
    ]);

    return (
        <>
            <h1>Correction 🦊</h1>
            <h2>Ajouter une nouvelle tache</h2>
            {/* TODO Faire le formulaire */}
            <p>...</p>

            <h2>Liste des taches</h2>
            {/* TODO Faire la liste */}
            <p>...</p>
        </>
    );
}

export default Todo;
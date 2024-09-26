
// Enumeration des valeurs de priorité possible pour les taches
export const taskPriorityEnum = {
    low: 'low',
    normal: 'normal',
    urgent: 'urgent'
}

// Protection de l'objet "taskPriorityEnum", pour eviter les modification 
Object.freeze(taskPriorityEnum);

import clsx from 'clsx';
import './TaskList.css';
import { taskPriorityEnum } from '../../enums/task.enum';

const TaskItem = ({ id, name, desc, priority, isDone }) => {

    const itemClassName = clsx(
        'tasklist__item',
        isDone && 'tasklist__item--done'
    );

    const dataClassName = clsx(
        'task-data', 
        priority === taskPriorityEnum.urgent && 'task-data--urgent'
    );

    return (
        <div className={itemClassName}>
            <div className={dataClassName}>
                <p className='task-data__name'>{name}</p>
                {desc && (
                    <p className='task-data__desc'>{desc}</p>
                )}
            </div>
            <div className='task-act'>
                <button className='task-act__Finish' disabled={isDone}>Terminer</button>
                <button className='task-act__Delete'>Supprimer</button>
            </div>
        </div>
    );
};

const TaskList = ({
    allTasks = []
}) => {

    return (
        <div class='tasklist'>
            {allTasks.map(task => (
                <TaskItem {...task} key={task.id} />
            ))}
        </div>
    );
};

export default TaskList;
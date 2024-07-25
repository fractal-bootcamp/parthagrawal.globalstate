import { Task as TaskType, useTaskStore } from "../store/taskStore"



export const Task = (task: TaskType) => {

    const taskStore = useTaskStore();

    const { deleteTask } = taskStore

    const handleDelete = () => {
        deleteTask(task.id)

    }

    return (
        <div>
            <div className="flex flex-row gap-2 items-center border-2 border-green-500 justify-center p-2">
                <TaskElement content={task.name} />
                <TaskElement content={task.description} />
                <TaskElement content={task.status} />
                <TaskElement content={task.theme} />
                <img src="trash.png" onClick={handleDelete} className="w-6 h-auto"></img>
            </div>
        </div>
    )
}

export const TaskElement = ({ content }: { content: string }) => {
    return <div className="border border-dashed border-green-500 p-2">{content}</div>
}
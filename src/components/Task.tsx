import { Task as TaskType, useTaskStore } from "../store/taskStore"

const dummyTask: TaskType = {
    id: 1,
    name: "Dummy Task",
    description: "This is a dummy task",
    status: "In Progress",
    theme: "dark"
}

export const Task = (task: TaskType) => {

    const taskStore = useTaskStore();

    const { deleteTask } = taskStore

    const handleDelete = () => {
        deleteTask(task.id)

    }

    return (
        <div>
            <div className="flex flex-row gap-2 items-center justify-center">
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
    return <div className="border-4 border-red-300 rounded-xl p-2">{content}</div>
}
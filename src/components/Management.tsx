import { useTaskListStore } from "../store/taskListStore"
import { Status, Task as TaskType, Theme, useTaskStore } from "../store/taskStore"
import { Task } from "./Task"



const dummyTask: TaskType = {
    id: 1,
    name: "Dummy Task",
    description: "This is a dummy task",
    status: "In Progress",
    theme: "dark"
}

export const Management = () => {
    const taskStore = useTaskStore()
    const { tasks, addTask, deleteTask } = taskStore

    const handleClick = () => {
        addTask(dummyTask)
    }
    return (
        <div className="text-3xl">
            Management
            <div>
                {tasks.map((task) => (<Task {...task} />))}
            </div>
            <button onClick={handleClick}>
                Add Dummy Task
            </button>
        </div>
    )
}
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
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="flex flex-col h-[50%] w-[50%] items-center justify-between border-2 rounded-lg border-black p-4">
                <div className="text-3xl">
                    Task Management
                </div>
                <div>
                    {tasks.map((task) => (<Task {...task} />))}
                </div>
                <button onClick={handleClick}>
                    <span>
                        <img src="/plus.svg" alt="Add Task" className="w-10 h-10" />
                    </span>
                </button>
            </div>
        </div>
    )
}
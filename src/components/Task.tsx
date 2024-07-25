import { Task as TaskType, useTaskStore } from "../store/taskStore"

const dummyTask: TaskType = {
    id: 1,
    name: "Dummy Task",
    description: "This is a dummy task",
    status: "In Progress",
    theme: "dark"
}

export const Task = (task: TaskType) => {

    console.log(task)

    return (
        <div>
            {task.name}
        </div>
    )
}
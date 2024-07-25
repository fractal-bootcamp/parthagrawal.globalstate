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

    return (
        <div>
            <div className="flex flex-row gap-2 ">
                <TaskElement content={task.name} />
                <TaskElement content={task.description} />
                <TaskElement content={task.status} />
                <TaskElement content={task.theme} />
            </div>
        </div>
    )
}

export const TaskElement = ({ content }: { content: string }) => {
    return <div className="border-4 border-red-300 rounded-xl p-2">{content}</div>


}
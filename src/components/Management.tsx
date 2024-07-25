import { useTaskStore } from "../store/taskStore"
import { AddTask } from "./AddTask"
import { Task } from "./Task"





export const Management = () => {
    const taskStore = useTaskStore()
    const { tasks } = taskStore


    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="flex flex-col min-h-[50%] min-w-[50%] items-center justify-between border-2 rounded-lg border-black p-4">
                <div className="text-3xl">
                    Task Management
                </div>
                <div className="flex flex-col gap-2">
                    {tasks.map((task) => (<Task {...task} />))}
                </div>

                <AddTask />

            </div>
        </div>
    )
}

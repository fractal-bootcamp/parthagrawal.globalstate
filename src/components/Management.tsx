import { useTaskStore } from "../store/taskStore"
import { AddTask } from "./AddTask"
import { Task } from "./Task"
import TextInput from "./TextInput"





export const Management = () => {
    const taskStore = useTaskStore()
    const { tasks } = taskStore


    return (
        <div className="flex flex-col h-screen items-center justify-center bg-black font-mono text-green-500 ">
            <div className="flex flex-col min-h-[50%] min-w-[50%] items-center justify-between border-2 rounded-md border-green-500 p-4">
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

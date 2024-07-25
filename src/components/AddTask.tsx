import { useState } from "react"
import { Task as TaskType, useTaskStore } from "../store/taskStore"
import TextInput from "./TextInput"



export const AddTask = () => {

    const taskStore = useTaskStore()
    const { tasks, addTask } = taskStore

    const [newTaskData, setNewTaskData] = useState<Omit<TaskType, 'id'>>({
        name: "",
        description: "",
        status: "Pending",
        theme: "light"
    });

    const calculateCurrentId = () => {
        const lastTask = tasks[tasks.length - 1];
        const currentId = lastTask ? lastTask.id + 1 : 1;
        return currentId;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setNewTaskData((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: e.target.value
            }
        })
        console.log(newTaskData)
    }


    const handleClick = () => {
        addTask(
            {
                ...newTaskData,
                id: calculateCurrentId()
            }
        )
    }

    return (
        <>
            <div className="flex flex-row gap-2 ">

                <TextInput name="name" placeholder="Name" onChange={handleChange} />

                {/* <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input input-bordered w-full max-w-xs" /> */}
                <input type="text" name="description" placeholder="Description" onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                <select name="status" onChange={handleChange} value={newTaskData.status} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Status?</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Archived">Archived</option>
                </select>
                <select name="theme" onChange={handleChange} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Theme?</option>
                    <option>light</option>
                    <option>dark</option>
                </select>


                <button onClick={handleClick} className="min-w-[25px]">
                    <span>
                        <img src="/plus.svg" alt="Add Task" className="w-10 h-10" />
                    </span>
                </button>
            </div>
        </>
    )
}
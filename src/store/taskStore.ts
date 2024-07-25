import { create } from 'zustand'

export type Status = "Pending" | "In Progress" | "Completed" | "Archived"
export type Theme = "light" | "dark"

export type Task = {
    id: number
    status: Status
    theme: Theme
    name: string
    description: string
}

export type TaskStore = {
    tasks: Task[]
    editTask: (editTaskParams: Task) => void
    addTask: (task: Task) => void
    deleteTask: (taskId: number) => void
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],

    editTask: (editTaskParams) => set((state) => ({
        tasks: state.tasks.map(task =>
            task.id === editTaskParams.id ? { ...task, ...editTaskParams } : task
        )
    })),
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),
    deleteTask: (taskId) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id != taskId)
    }))

}))
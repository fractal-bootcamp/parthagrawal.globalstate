import { create } from 'zustand'

type Status = "Pending" | "In Progress" | "Completed" | "Archived"
type Theme = "light" | "dark"

type TaskStore = {
    status: Status
    theme: Theme
    name: string
    description: string
    editName: (newName: string) => void
    editDesc: (newDesc: string) => void
    editStatus: (newStatus: Status) => void
    editTheme: (newTheme: Theme) => void
}

const useTaskStore = create<TaskStore>((set) => ({
    status: "Pending",
    theme: "light",
    name: "",
    description: "",
    editName: (newName) => set(() => ({ name: newName })),
    editDesc: (newDesc) => set(() => ({ description: newDesc })),
    editStatus: (newStatus) => set(() => ({ status: newStatus })),
    editTheme: (newTheme) => set(() => ({ theme: newTheme }))
}))
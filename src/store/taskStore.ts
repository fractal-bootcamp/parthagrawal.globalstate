import { create } from 'zustand'

type Status = "Pending" | "In Progress" | "Completed" | "Archived"
type Theme = "light" | "dark"

export type TaskStore = {
    id: number
    status: Status
    theme: Theme
    name: string
    description: string
    editName: (newName: string) => void
    editDesc: (newDesc: string) => void
    editStatus: (newStatus: Status) => void
    editTheme: (newTheme: Theme) => void
    editId: (newId: number) => void
}

const useTaskStore = create<TaskStore>((set) => ({
    id: 0,
    status: "Pending",
    theme: "light",
    name: "",
    description: "",
    editName: (newName) => set(() => ({ name: newName })),
    editDesc: (newDesc) => set(() => ({ description: newDesc })),
    editStatus: (newStatus) => set(() => ({ status: newStatus })),
    editTheme: (newTheme) => set(() => ({ theme: newTheme })),
    editId: (newId) => set(() => ({ id: newId }))
}))
import { create } from 'zustand';
import { TaskStore } from './taskStore';

type TaskListStore = {
    tasks: TaskStore[];
    addTask: (task: TaskStore) => void;
    deleteTask: (taskId: number) => void;

}

const useTaskListStore = create<TaskListStore>((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    deleteTask: (taskId) => set((state) => ({ tasks: state.tasks.filter(task => task.id !== taskId) }))
}))
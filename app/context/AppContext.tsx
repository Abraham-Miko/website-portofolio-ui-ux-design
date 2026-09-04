"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  category: "industri" | "pendidikan";
  platform: "Drive" | "Canva" | "Figma" | "YouTube" | "Lainnya";
  url: string;
  deadline: string;
};

type AppContextType = {
  role: "admin" | "user";
  toggleRole: () => void;
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updatedTask: Task) => void;
  deleteTask: (id: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const mockInitialTasks: Task[] = [
  {
    id: "1",
    title: "Desain UI/UX Carental",
    description: "Membuat wireframe dan prototype untuk platform rental mobil.",
    category: "industri",
    platform: "Figma",
    url: "https://figma.com",
    deadline: "2026-10-15",
  },
  {
    id: "2",
    title: "Modul Logika Pemrograman",
    description: "Menyusun materi ajar NexLogic untuk siswa SMK.",
    category: "pendidikan",
    platform: "Drive",
    url: "https://drive.google.com",
    deadline: "2026-11-01",
  }
];

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<"admin" | "user">("user");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTasks = localStorage.getItem("app_tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(mockInitialTasks);
      localStorage.setItem("app_tasks", JSON.stringify(mockInitialTasks));
    }
  }, []);

  const saveToStorage = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem("app_tasks", JSON.stringify(newTasks));
  };

  const addTask = (task: Task) => saveToStorage([...tasks, task]);
  const updateTask = (id: string, updatedTask: Task) =>
    saveToStorage(tasks.map((t) => (t.id === id ? updatedTask : t)));
  const deleteTask = (id: string) => saveToStorage(tasks.filter((t) => t.id !== id));
  const toggleRole = () => setRole((prev) => (prev === "admin" ? "user" : "admin"));

  if (!isClient) return null; // Mencegah hydration mismatch

  return (
    <AppContext.Provider value={{ role, toggleRole, tasks, addTask, updateTask, deleteTask }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Register, TaskForm, TaskManager } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/app/task-manager" element={<TaskManager />} />
        <Route path="/app/new-task" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>

  )
}

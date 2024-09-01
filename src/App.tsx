import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Register, TaskManager } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/app/task-manager" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>

  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Register, TaskForm, TaskManager, User } from "./pages";
import { AuthProvider } from "./context";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />
        <Route
          path="/auth/register"
          element={
            <AuthProvider>
              <Register />
            </AuthProvider>
          }
        />
        <Route 
          path="/app/my-account/:user_id"
          element={
            <AuthProvider>
              <User />
            </AuthProvider>
          }
        />
        <Route
          path="/app/task-manager"
          element={
            <AuthProvider>
              <TaskManager />
            </AuthProvider>
          }
        />
        <Route
          path="/app/new-task"
          element={
            <AuthProvider>
              <TaskForm />
            </AuthProvider>
          }
        />
        <Route
          path="/app/edit-task/:task_id"
          element={
            <AuthProvider>
              <TaskForm />
            </AuthProvider>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

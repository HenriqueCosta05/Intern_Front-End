import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  )
}

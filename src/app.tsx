import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";

export default function App() {
  return (
      <Routes>
            <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                        <Route path="/blogs" element={<Blogs />} />
                              <Route path="*" element={<Navigate to="/login" />} />
                                  </Routes>
                                    );
                                    }
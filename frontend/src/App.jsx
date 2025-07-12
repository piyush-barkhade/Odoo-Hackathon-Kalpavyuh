import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import UserDashboard from "./features/dashboard/UserDashboard";
import AdminPanel from "./features/dashboard/AdminPanel";
import ItemDetail from "./features/items/ItemDetail";
import NewItemForm from "./features/items/NewItemForm";
import ItemList from "./features/items/ItemList";
import LandingPage from "./features/dashboard/LandingPage";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/new-item" element={<NewItemForm />} />
        <Route path="/browse" element={<ItemList />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

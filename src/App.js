import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Calendar from "./pages/Calendar";
import ExamsResults from "./pages/ExamsResults";
import PrivateFiles from "./pages/PrivateFiles";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import Library from "./pages/Library";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import Payments from "./pages/admin/Payments";
import Announcements from "./pages/admin/Announcements";
import Resources from "./pages/admin/Resources";
import LecturerLayout from "./components/LecturerLayout";
import LecturerHome from "./pages/Lecturer/LecturerHome";
import LecturerDashboard from "./pages/Lecturer/LecturerDashboard";
import LecturerLibrary from "./pages/Lecturer/LecturerLibrary";
import ExamResults from "./pages/ExamsResults";
import Courses from "./pages/Courses";

function PrivateRoute({ children, role }) {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Registration />} />

            {/* Student */}
            <Route
              path="/"
              element={
                <PrivateRoute role="student">
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="exams-results" element={<ExamsResults />} />
              <Route path="courses" element={<Courses />} />
              <Route path="private-files" element={<PrivateFiles />} />
              <Route path="library" element={<Library />} />
            </Route>

            {/* Admin */}
            <Route
              path="/admin"
              element={
                <PrivateRoute role="admin">
                  <AdminLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route
                path="/admin/usermanagement"
                element={<UserManagement />}
              />
              <Route
                path="/admin/coursemanagement"
                element={<Courses />}
              />
              <Route path="/admin/payments" element={<Payments />} />
              <Route path="/admin/announcements" element={<Announcements />} />
              <Route path="/admin/exams-results" element={<ExamResults />} />
              <Route path="/admin/resources" element={<Resources />} />
            </Route>

            {/* Lecturer */}
            <Route
              path="/lecturer"
              element={
                <PrivateRoute role="lecturer">
                  <LecturerLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<LecturerHome />} />
              <Route
                path="/lecturer/dashboard"
                element={<LecturerDashboard />}
              />
              <Route path="/lecturer/assignments" element={<Assignments />} />
              <Route path="/lecturer/calendar" element={<Calendar />} />
              <Route path="/lecturer/exams-results" element={<ExamResults />} />
              <Route
                path="/lecturer/private-files"
                element={<PrivateFiles />}
              />
              <Route path="/lecturer/library" element={<LecturerLibrary />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "./services/firebase";
import { ToastProvider } from "./components/toast/toastContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#6366f1' }}>Loading...</div>;
  }

  if (!user) {
    return <NotFound />;
  }

  return <>{children}</>;
};

const NotFound = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', textAlign: 'center' }}>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#111827' }}>404 - Page Not Found</h2>
    <p style={{ color: '#6b7280', fontSize: '16px' }}>This page you are trying to visit does not exist.</p>
  </div>
);

const App = () => {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ToastProvider>
  );
};

export default App;
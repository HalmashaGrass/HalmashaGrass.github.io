import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PasswordForm from './PasswordForm';
import AdminPanel from './AdminPanel';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-white text-green-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto p-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">עמוד מנהלים</h1>
        {!isAuthenticated ? (
          <PasswordForm onAuthenticate={() => setIsAuthenticated(true)} />
        ) : (
          <AdminPanel />
        )}
      </motion.div>
    </div>
  );
};

export default App;


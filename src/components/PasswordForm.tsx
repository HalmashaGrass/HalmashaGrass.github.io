import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Lock } from 'lucide-react';

interface PasswordFormProps {
  onAuthenticate: () => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Replace with your actual password
      onAuthenticate();
    } else {
      setError('סיסמה שגוייה');
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <Lock className="text-green-600" />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="הכנס סיסמה"
            className="border-green-300 focus:border-green-500"
          />
        </div>
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          כניסה
        </Button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </motion.div>
  );
};

export default PasswordForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FileImage, User, Type, AlignLeft } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firestore';

const ArticleForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'articles'), {
        name,
        author,
        content,
        image
      });
      // Reset form
      setTitle('');
      setAuthor('');
      setContent('');
      setImage('');
      alert('Article added successfully!');
    } catch (error) {
      console.error('Error adding article: ', error);
      alert('Error adding article. Please try again.');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="flex items-center space-x-2">
        <Type className="text-green-600" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="כותרת"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <User className="text-green-600" />
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="שם הכותב"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <AlignLeft className="text-green-600" />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="תוכן"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <FileImage className="text-green-600" />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="כתובת אתר לתמונה"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        הוספת כתבה
      </Button>
    </motion.form>
  );
};

export default ArticleForm;


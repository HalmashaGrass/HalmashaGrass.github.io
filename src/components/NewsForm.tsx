import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FileImage, Calendar, Type, AlignLeft, Tag } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firestore';

const NewsForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'news'), {
        title,
        content,
        date,
        image,
        tag
      });
      // Reset form
      setTitle('');
      setContent('');
      setDate('');
      setImage('');
      setTag('');
      alert('פריט חדשות נוסף בהצלחה');
    } catch (error) {
      console.error('תקלה בהוספת פריט חדשות: ', error);
      alert('תקלה בהוספת פריט חדשות');
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
        <AlignLeft className="text-green-600" />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="תוכן"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="text-green-600" />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <FileImage className="text-green-600" />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="כתובת תמונה"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Tag className="text-green-600" />
        <Input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Tag"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        הוספת פריט חדשות
      </Button>
    </motion.form>
  );
};

export default NewsForm;


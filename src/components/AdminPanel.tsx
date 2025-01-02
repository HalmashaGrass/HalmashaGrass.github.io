import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ArticleForm from './ArticleForm';
import NewsForm from './NewsForm';
import ArticleEditForm from './ArticleEditForm';

const AdminPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Tabs defaultValue="article" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="article">הוסף כתבה</TabsTrigger>
          <TabsTrigger value="news">הוסף פריט חדשות</TabsTrigger>
          <TabsTrigger value='edit-article'>ערוך כתבה</TabsTrigger>
        </TabsList>
        <TabsContent value="article">
          <ArticleForm />
        </TabsContent>
        <TabsContent value="news">
          <NewsForm />
        </TabsContent>
        <TabsContent value='edit-article'>
          <ArticleEditForm />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default AdminPanel;


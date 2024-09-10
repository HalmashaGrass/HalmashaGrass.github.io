import React from 'react'
import { motion } from 'framer-motion'

// News items data
const newsData = [
  {
    id: 1,
    title: "יש תקווה!",
    description: "סוף סוף, אחרי 248 שנים בהן ג'ורג' וושינגטון הנהיג את ארה''ב ומנע ברודנות מידע מהציבור, יש תקווה, להשתחרר משלטון ההסתרה! באם תזכה קמלה האריס בבחירות, זו תהיה הפעם הראשונה בתולדות ארה''ב שאישה תכהן בבית הלבן, משמע לא ג'ורג' וושינגטון!",
    image: "/images/harris.png",
    date: "2023-06-15",
    category: "ארה''ב"
  }
]

export default function NewsFeed() {
    console.log("News feed")
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-orange-100 bg-fixed">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-12 text-center">
          🌟 Exciting Website News! 🌟
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function NewsCard({ item }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className="card-body">
          <div className="flex items-start space-x-4">
            <img src={item.image} alt="" className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-1">
              <h2 className="card-title text-green-700 text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
              <div className="badge badge-accent text-white font-semibold mb-2">{item.category}</div>
            </div>
          </div>
          <p className="text-gray-600 mt-4 mb-4">{item.description}</p>
          <div className="text-right text-sm text-orange-500">{item.date}</div>
        </div>
      </div>
    </motion.div>
  )
}
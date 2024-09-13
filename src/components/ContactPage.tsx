import { motion } from 'framer-motion'
import { Mail, Phone, PanelsTopLeft, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

// Define contact methods here for easy addition in the future
const contactMethods = [
  {
    icon: Mail,
    label: 'דוא"ל',
    value: 'halmasha.mail@gmail.com',
    href: 'mailto:halmasha.mail@gmail.com',
  },
  {
    icon: Phone,
    label: 'ערוץ ווטסאפ',
    value: 'whatsapp.com/channel/0029VahxxzuCnA7pFyhTWv38',
    href: 'https://whatsapp.com/channel/0029VahxxzuCnA7pFyhTWv38',
  },
  {
    icon: PanelsTopLeft,
    label: 'אתר אינטרנט',
    value: 'halmashagrass.github.io',
    href: 'https://halmashagrass.github.io'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            חזרה לעמוד הבית
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            צרו קשר
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            נשמח לשמוע מכם! צרו איתנו קשר בעזרת כל אחת מהדרכים האלו:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">מידע ליצירת קשר</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-500 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <method.icon className="mr-3 h-6 w-6 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{method.label}</p>
                    <p>{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
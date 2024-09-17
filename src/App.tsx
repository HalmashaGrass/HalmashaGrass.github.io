import { motion } from "framer-motion"
import { ReactNode } from 'react';
import { HashRouter, Link, Route, Routes } from "react-router-dom"

import { Menu, X } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

import ArticlesSection from "./components/ArticleSection"

import ArticlePageNew from "./components/ArticlePage"
import NewsFeed from "./components/NewsFeed"
import ContactPage from "./components/ContactPage"
import LanguageDialog from "./components/LanguageDialog";

export default function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/articles/:id" element={<ArticlePageNew />} />
      <Route path="/news" element={<NewsFeed />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </HashRouter>
  )
}

function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lang, setLang] = useState('')

  const containerVariants = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: {

        delayChildren: 0.3,

        staggerChildren: 0.2

      }

    }

  }



  const itemVariants = {

    hidden: { y: 20, opacity: 0 },

    visible: {

      y: 0,

      opacity: 1

    }

  }



  return (

    <div className="min-h-screen bg-white" dir="rtl">

      {/* Orange Navbar */}

      <nav className="bg-orange-500 p-4">

        <div className="container mx-auto flex justify-between items-center">

          <motion.div

            initial={{ opacity: 0, x: 20 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.5 }}

          >

            <Link to="/" className="text-white text-2xl font-bold">האלמש"ע</Link>

          </motion.div>

          <div className="hidden md:flex space-x-3">

            <NavLink to="/">בית</NavLink>
<hr></hr>
            <NavLink to="/news">חדשות</NavLink>

            <NavLink to="/contact">צרו קשר</NavLink>

          </div>

          <div className="md:hidden">

            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>

              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}

            </Button>

          </div>

        </div>

        {isMenuOpen && (

          <motion.div

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.3 }}

            className="md:hidden mt-4 space-y-2"

          >
            <NavLink to="/">בית</NavLink>

            <NavLink to="/news">חדשות</NavLink>

            <NavLink to="/contact">צרו קשר</NavLink>

          </motion.div>

        )}

      </nav>

        <LanguageDialog setLangState={setLang} langState={lang} />

      {/* Hero Section with Semi-transparent Image Background */}

      <section className="relative py-40">

        <div 

          className="absolute inset-0 bg-cover bg-center"

          style={{ 

            backgroundImage: "url('/images/grass-bg.jpg')",

            opacity: 0.6

          }}

        ></div>

        <motion.div 

          className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"

          variants={containerVariants}

          initial="hidden"

          animate="visible"

        >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        זכרו: הממשלה שומעת
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-800 max-w-2xl">
          אל תכריזו בקול שלוש פעמים שאתם יודעים שאין עשב בעולם, זה יזמן את השר להסתרה מהציבור, הידוע בשמו הבדוי: לוציפר כהן, ובשמו האמיתי: לוציפר לוי


          </motion.p>
        </motion.div>
        </section>
        
        <section className="bg-orange-100 py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="md:w-1/3 mb-8 md:mb-0">
                    <img src="/images/grass.jpg" alt="Grass" className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto" /> 
                </motion.div>
                <div className="md:w-1/2">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-3xl font-bold text-gray-800 mb-4">
                        אודות האגודה
                    </motion.h2>
                    <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600"
              >
                אנחנו, האגודה למען מיטוט שקר העשב, בראשי תיבות: (אלמש''ע) או בקיצור: אגודת מיטוט העשב, פועלים כבר עשרים ושמונה שנים למען מיטוט השקר שנקרא ''עשב''. אנחנו יודעים ומנסים להנחיל לעולם את זה שהמושג ''עשב'' (עשב, עשבים, עשב ערבה, עשבי תיבול,עשבים שותים, עשב חיטה וכו') הוא המצאה של ממשלת ארה''ב, עוד מהימים בהם ג'ורג' וושינגטון היה מוכר דשא נחשל. (ראה בכתבה) הצטרפו אלינו, ויחד, נמוטט את השקרים!
              </motion.p>
                </div>
            </div>
          </div>
        </section>
        <Separator className="my-8" />

{/* Empty Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <ArticlesSection />
  </div>
</section>
        </div>
        )}
        interface NavLinkProps {
          to: string;
          children: ReactNode;
          className?: string;
        }
        
        function NavLink({ to, children, className = "" }: NavLinkProps) {
          return (
            <Link
              to={to}
              className={`text-white hover:text-gray-200 transition-colors duration-200 ${className}`}
            >
              {children}
            </Link>
          );
        }
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticlePage from "./ArticlePage.jsx";
import React, { useEffect } from "react";
import axios from 'axios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticlePage/>} />
      </Routes>
    </BrowserRouter>
  );
}



function Home(props) {
  const [articles, setArticles] = React.useState([]);
  useEffect(() => {
    axios.get('/data/articles.json')
    .then(response => {
      setArticles(response.data.reverse())
    })
    .catch(error =>{
      console.error("Error fetching articles:", error);
    });
  }, []);
  console.log(articles)
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10">
        <MyNavbar />
      </header>
      <main className="mt-16">
        <section>
          <div className="hero min-h-screen w-full grassImg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="w-full">
                <h1 className="mb-5 text-4xl sm:text-5xl font-bold">זכרו: הממשלה שומעת</h1>
                <p className="mb-5 text-lg sm:text-xl">
אל תכריזו בקול שלוש פעמים שאתם יודעים שאין עשב בעולם, זה יזמן את השר להסתרה מהציבור, הידוע בשמו הבדוי: לוציפר כהן, ובשמו האמיתי: לוציפר לוי
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <MyDescHero />
        </section>
        <Divider />
        <section>
          <h2>כתבות</h2>
          <div className="grid-container">
            {
              articles.map(article => {
                // Debug log for each article
                console.log('Rendering article:', article);

                return (
                  <Card
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    img={article.imageName}
                  />
                );
              })
            }
          </div>
        </section>
      </main>
    </>
  );
}

export function MyNavbar() {
  return (
    <div className="navbar bg-orange-400">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl sm:text-2xl font-bold text-white">האגודה למען מיטוט שקר העשב</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-1">
          {['בית', 'אודות', 'חדשות', 'פורום', 'כתבות', 'חנות'].map((item) => (
            <li key={item}>
              <a className="text-gray-300 font-extrabold no-underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MyDescHero() {
  return (
    <div className="hero bg-orange-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <img
          src="https://images.cdn-files-a.com/uploads/9121621/800_gi-66153a6f16170.jpg"
          className="max-w-xs sm:max-w-md rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left lg:mr-8">
          <h1 className="text-4xl sm:text-5xl font-bold">אודות האגודה</h1>
          <p className="py-4 sm:py-6 text-base sm:text-lg">
          אנחנו, האגודה למען מיטוט שקר העשב, בראשי תיבות: (אלמש''ע) או בקיצור: אגודת מיטוט העשב, פועלים כבר עשרים ושמונה שנים למען מיטוט השקר שנקרא ''עשב''. אנחנו יודעים ומנסים להנחיל לעולם את זה שהמושג ''עשב'' (עשב, עשבים, עשב ערבה, עשבי תיבול,עשבים שותים, עשב חיטה וכו') הוא המצאה של ממשלת ארה''ב, עוד מהימים בהם ג'ורג' וושינגטון היה מוכר דשא נחשל. (ראה בכתבה)
          הצטרפו אלינו, ויחד, נמוטט את השקרים!
          </p>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
      <div className="divider"></div>
  )
}
function Card({ id, title, img }) {
  console.log('Image prop:', img); // Debug log

  // Construct image URL from assets folder
  const imageSrc = `/images/${img}`;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/articles/${id}`}>
            <button className="btn btn-primary">קרא עוד</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default App;

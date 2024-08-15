import "./App.css";


function App() {

  return (
    <>
  <header>
  <MyNavbar/>
  </header>
    <main>
    <div
  className="hero min-h-screen grassImg">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-full">
      <h1 className="mb-5 text-5xl font-bold">זכרו: הממשלה שומעת</h1>
      <p className="mb-5 text-xl">
      אל תכריזו בקול שלוש פעמים שאתם יודעים שאין עשב בעולם, זה יזמן את השר להסתרה מהציבור, הידוע בשמו הבדוי: לוציפר כהן, ובשמו האמיתי: לוציפר לוי
      </p>

    </div>
  </div>
  <hr></hr>
</div>
    </main>

  

    </>
  )
}

function MyNavbar() {
  return (
    <div className="navbar bg-orange-400">
    <div className="flex-1">
      <a className="btn btn-ghost text-2xl font-bold text-white">האגודה למען מיטוט שקר העשב</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a className="text-gray-300 font-extrabold no-underline" >בית</a></li>
        <li><a className="text-gray-300 font-extrabold no-underline">אודות</a></li>
        <li><a className="text-gray-300 font-extrabold no-underline">חדשות</a></li>
        <li><a className="text-gray-300 font-extrabold no-underline">פורום</a></li>
        <li><a className="text-gray-300 font-extrabold no-underline">כתבות</a></li>
        <li><a className="text-gray-300 font-extrabold no-underline">חנות</a></li>
      
      </ul>
    </div>
  </div>

  )
}

export default App

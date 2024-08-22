import "./App.css";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main className="pt-16"> {/* Added padding to prevent content from hiding under fixed header */}
        <section>
          <div className="hero min-h-screen w-full grassImg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="w-full px-4"> {/* Added padding for better spacing */}
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
      </main>
    </>
  );
}

function MyNavbar() {
  return (
    <div className="navbar bg-orange-400 px-4 sm:px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-lg sm:text-2xl font-bold text-white">האגודה למען מיטוט שקר העשב</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal sm:menu-vertical px-1">
          <li><a className="text-gray-300 font-extrabold no-underline">בית</a></li>
          <li><a className="text-gray-300 font-extrabold no-underline">אודות</a></li>
          <li><a className="text-gray-300 font-extrabold no-underline">חדשות</a></li>
          <li><a className="text-gray-300 font-extrabold no-underline">פורום</a></li>
          <li><a className="text-gray-300 font-extrabold no-underline">כתבות</a></li>
          <li><a className="text-gray-300 font-extrabold no-underline">חנות</a></li>
        </ul>
      </div>
    </div>
  );
}

function MyDescHero() {
  return (
    <div className="hero bg-orange-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse px-4">
        <img
          src="https://images.cdn-files-a.com/uploads/9121621/800_gi-66153a6f16170.jpg"
          className="max-w-full lg:max-w-md rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-right lg:mr-6">
          <h1 className="text-4xl sm:text-5xl font-bold">אודות האגודה</h1>
          <p className="py-6 text-lg sm:text-xl">
            אנחנו, האגודה למען מיטוט שקר העשב, בראשי תיבות: (אלמש''ע) או בקיצור: אגודת מיטוט העשב, פועלים כבר עשרים ושמונה שנים למען מיטוט השקר שנקרא ''עשב''...
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

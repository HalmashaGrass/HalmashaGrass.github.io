import "./App.css";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full">
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
                  אל תכריזו בקול שלוש פעמים שאתם יודעים שאין עשב בעולם...
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
            אנחנו, האגודה למען מיטוט שקר העשב...
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

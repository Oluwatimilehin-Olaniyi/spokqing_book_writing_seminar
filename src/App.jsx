import Header from "./components/Header";
import Countdown from "./components/Countdown";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white transition-colors duration-200 font-display">
      
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Countdown */}
       
        <Countdown />

        {/* Hero Section */}
        <section
          id="about"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200 shadow-2xl">
              <img
                src="img.png"
                alt="Author portrait"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
              Masterclass Highlight
            </span>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              LET'S TALK <span className="text-primary">WRITING</span> AND MAKING <span className="text-primary">MONEY</span> FROM{" "}
              <span className="text-primary">BOOKS.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              Join world-renowned African author{" "}
              <strong>Eneye Lawal</strong> for an exclusive intensive
              seminar.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Eneye Lawal is a jack of all trades and a master of many. 
              He is a corporate event compere, writer, author, teacher and AI enthusiast. 
              Mr Lawal as he is mostly called is a graduate of English and Literary Studies from
               the prestigious Prince Abubakar Audu University, Anyigba. Some of his books 
               include: June Tunes (a chapbook), Thou Shall Write, Companion to Writing Poetry, Story Story, among others.</p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2">
                <a href="register">Get Started Today</a>
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>

              <button className="bg-slate-100 dark:bg-slate-800 px-8 py-4 rounded-lg font-bold text-lg">
                Full Biography
              </button>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What You Will Master</h2>
            <p className="text-slate-600 dark:text-slate-400">
              From writing to global distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Newbie Writing", description: "Start from zero and write with confidence.", icon: "edit_note" },
              { title: "Self Publishing", description:"Turn your manuscript into a published book—your way.", icon: "publish" },
              { title: "Book marketing", description:"Get your book seen, shared, and sold.", icon: "campaign" },
              { title: "Making money through creative writing", description:"Transform your words into income streams.", icon: "payments" },
              { title: "Writing & A.I", description:"Write smarter, faster, and better with AI tools.", icon: "psychology" },

            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl border dark:border-slate-800 hover:border-primary/50 shadow-sm"
              >
                <div className="size-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration */}
       <RegisterForm />

       {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;

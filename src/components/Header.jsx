
const Header = () => {
  return (
    
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f2f4] dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl w-10 text-primary">
              <img src="logo.jpg" alt="Logo" />
            </span>
            <h2 className="text-lg font-bold tracking-tight">
              Spokqing Writing Seminar
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#curriculum" className="text-sm font-medium hover:text-primary">
              Curriculum
            </a>
            <a href="#register" className="text-sm font-medium hover:text-primary">
              Register
            </a>
            <a
                href="#register"
                className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-primary/90"
              >             
                Secure My Seat
              </a>
          </nav>
        </div>
      </header>
  );
  
};

export default Header

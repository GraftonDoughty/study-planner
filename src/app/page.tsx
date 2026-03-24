import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-950 pt-16 pb-24 lg:pt-32 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 border border-indigo-100 dark:border-indigo-800">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-indigo-600 px-0 py-0"></span>
                  Enhanced Academic Management
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                  Master your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    learning journey.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                  The primitive to your academic success. Manage assignments, track progress, and conquer deadlines with our minimalist yet powerful planning interface.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/tasks"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200"
                  >
                    Start Planning Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-10 dark:opacity-20 animate-pulse"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl transition hover:scale-[1.01] duration-500">
                  <Image 
                    src="/hero.png" 
                    alt="Study Planner Dashboard" 
                    width={1024} 
                    height={768} 
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-50 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© 2026 StudyPlanner. Empowering students worldwide.</p>
        </div>
      </footer>
    </div>
  );
}

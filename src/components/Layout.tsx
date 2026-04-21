import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col font-sans selection:bg-brand-purple selection:text-white">
      {/* Cyberpunk Banner */}
      <div className="sticky top-0 z-[60] w-full bg-[#fde047] text-black text-center py-1 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase shadow-[0_0_10px_rgba(253,224,71,0.5)] border-b-2 border-black flex items-center justify-center gap-4">
        <span>⚠️</span>
        <span className="animate-pulse">BETA // EN PRUEBAS</span>
        <span>⚠️</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-[28px] sm:top-[32px] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-lg group-hover:shadow-brand-purple/20 transition-all duration-300">
              <span className="text-white font-bold text-sm">NF</span>
            </div>
            <span>NorthForge<span className="text-slate-400 font-light">Studios</span></span>
          </Link>
          <nav>
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Inicio
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <span>NorthForge<span className="text-slate-400 font-light">Studios</span></span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs">
              Forjando soluciones de Inteligencia Artificial para el comercio moderno.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <a href="mailto:contacto@northforgestudios.tech" className="text-slate-400 hover:text-brand-blue transition-colors text-sm">
              contacto@northforgestudios.tech
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <Link to="/politica-de-privacidad" className="text-slate-400 hover:text-brand-blue transition-colors text-sm">
              Política de Privacidad
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NorthForge Studios. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

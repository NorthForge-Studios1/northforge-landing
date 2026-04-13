import { Bot, MessageSquare, Workflow } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 -z-10"></div>
        <div className="absolute top-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOXYzOEgyVjFoMzd6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] -z-10"></div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-brand-blue text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Innovación en Desarrollo
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              NorthForge Studios
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Forjando soluciones de <span className="text-brand-purple font-medium">Inteligencia Artificial</span> para el comercio moderno.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestros Productos</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Desarrollamos herramientas de vanguardia que transforman la manera en que los negocios operan e interactúan con sus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WaShop Admin Card */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-brand-purple/10 transition-colors duration-500"></div>

              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700/50 group-hover:scale-110 transition-transform duration-500">
                <Bot className="w-7 h-7 text-brand-purple" />
              </div>

              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                WaShop Admin
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full">
                  Destacado
                </span>
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8">
                Nuestra plataforma insignia de automatización de WhatsApp. Combina inteligencia artificial avanzada con control de inventario robusto para revolucionar el comercio conversacional B2B y B2C.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <MessageSquare className="w-4 h-4 text-brand-blue" />
                  Conexión oficial con WhatsApp Cloud API
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Workflow className="w-4 h-4 text-brand-blue" />
                  Agentes de IA autónomos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Legal y Cumplimiento
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-slate-400 text-lg">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-blue" />
              Información General
            </h2>
            <p className="text-slate-300 leading-relaxed">
              En NorthForge Studios, estamos comprometidos con la protección de la privacidad y los datos de nuestros usuarios y clientes. Esta política detalla cómo recopilamos, utilizamos y protegemos la información en el marco de nuestros servicios, incluyendo nuestras plataformas de inteligencia artificial y automatización comercial.
            </p>
          </section>

          <section className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-2xl rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3 relative z-10">
              <Lock className="w-6 h-6 text-brand-blue" />
              Uso de Datos de Terceros y WhatsApp
            </h2>
            <div className="text-slate-300 leading-relaxed font-medium relative z-10">
              <p>
                Uso de Datos de Terceros y WhatsApp: NorthForge Studios desarrolla y administra aplicaciones de software (como WaShop Admin) que se conectan con la API oficial de WhatsApp Cloud. Los datos de mensajería procesados a través de nuestras integraciones se utilizan exclusivamente para proveer el servicio de automatización y atención al cliente (mediante IA) contratado por nuestros clientes B2B. No vendemos, alquilamos ni utilizamos los datos de las conversaciones para fines publicitarios propios o de terceros.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Seguridad de la Información</h2>
            <p className="text-slate-300 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas de nivel empresarial para proteger los datos contra acceso no autorizado, alteración, divulgación o destrucción. Nuestros sistemas operan bajo estrictos protocolos de encriptación y control de acceso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Si tiene alguna pregunta, inquietud o solicitud relacionada con esta Política de Privacidad o el manejo de sus datos, por favor contáctenos a través de nuestro correo electrónico oficial:
            </p>
            <div className="inline-block bg-slate-950 px-6 py-4 rounded-xl border border-slate-800">
              <a href="mailto:contacto@northforgestudios.tech" className="text-brand-blue hover:text-brand-purple transition-colors font-mono text-lg flex items-center gap-2">
                contacto@northforgestudios.tech
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

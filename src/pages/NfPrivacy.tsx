// Nov 2026: política de privacidad con el estilo nuevo. El texto de WhatsApp se mantiene igual
// porque es el que revisó Meta para WaShop Admin.
import { Link } from 'react-router-dom';
import '../nf/nf.css';
import { EMAIL } from '../nf/copy';
import { useEffect } from 'react';

export default function NfPrivacy() {
  useEffect(() => { document.documentElement.lang = 'es'; document.title = 'Política de privacidad — NorthForge Studios'; }, []);
  return (
    <div className="nf">
      <main className="nf-section nf-how" style={{ minHeight: '100svh' }}>
        <div className="nf-how-col">
          <p style={{ marginBottom: 40 }}><Link to="/">← NorthForge Studios</Link></p>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: .95, textTransform: 'uppercase', marginBottom: 24 }}>Política de privacidad</h1>
          <p style={{ color: 'var(--muted)', marginBottom: 56 }}>Última actualización: 10 de noviembre de 2026</p>
          <div className="nf-step"><p><b>Información general.</b> En NorthForge Studios estamos comprometidos con la protección de la privacidad y los datos de nuestros usuarios y clientes. Esta política detalla cómo recopilamos, utilizamos y protegemos la información en el marco de nuestros servicios, incluyendo nuestras plataformas de inteligencia artificial y automatización comercial.</p></div>
          <div className="nf-step"><p><b>Esta página.</b> northforgestudios.tech no usa cookies de seguimiento, no tiene cuentas ni formularios y no guarda datos de quien la visita. Solo recuerda en tu navegador el idioma que elegiste.</p></div>
          <div className="nf-step"><p><b>Uso de datos de terceros y WhatsApp.</b> NorthForge Studios desarrolla y administra aplicaciones de software (como WaShop Admin) que se conectan con la API oficial de WhatsApp Cloud. Los datos de mensajería procesados a través de nuestras integraciones se utilizan exclusivamente para proveer el servicio de automatización y atención al cliente (mediante IA) contratado por nuestros clientes B2B. No vendemos, alquilamos ni utilizamos los datos de las conversaciones para fines publicitarios propios o de terceros.</p></div>
          <div className="nf-step"><p><b>MyWorld.</b> MyWorld tiene su propia política de privacidad en myworldhistory.site/privacy, con el detalle de qué guarda y cómo borrar tus datos.</p></div>
          <div className="nf-step"><p><b>Seguridad de la información.</b> Implementamos medidas de seguridad técnicas y organizativas para proteger los datos contra acceso no autorizado, alteración, divulgación o destrucción. Nuestros sistemas operan con encriptación y control de acceso.</p></div>
          <div className="nf-step"><p><b>Contacto.</b> Si tienes preguntas o solicitudes sobre esta política o el manejo de tus datos, escríbenos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p></div>
        </div>
      </main>
    </div>
  );
}

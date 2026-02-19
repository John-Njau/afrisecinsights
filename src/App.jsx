import { useEffect, useMemo, useState } from 'react';
import './App.css';

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

const serviceAreas = [
  {
    icon: '🛡️',
    title: 'Managed Security Services',
    description:
      'Continuous monitoring, incident response support, and security hardening tailored for African businesses and regulated sectors.',
  },
  {
    icon: '🔐',
    title: 'Application & Cloud Security',
    description:
      'Secure SDLC, API security reviews, SAST/DAST testing, and cloud posture management to protect modern digital platforms.',
  },
  {
    icon: '📜',
    title: 'Governance, Risk & Compliance',
    description:
      'Practical policy development, risk assessments, and compliance support aligned with local laws and international standards.',
  },
];

function App() {
  const initialPage = useMemo(() => {
    const hash = window.location.hash.replace('#', '');
    return pages.some((page) => page.id === hash) ? hash : 'home';
  }, []);

  const [activePage, setActivePage] = useState(initialPage);

  useEffect(() => {
    window.location.hash = activePage;
  }, [activePage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-sky-700 text-white font-sans">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-blue-950/70 border-b border-blue-200/20">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Afrisec Insights</h1>
          <div className="flex flex-wrap gap-2">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition ${
                  activePage === page.id
                    ? 'bg-amber-400 text-blue-950 font-semibold'
                    : 'border border-blue-200/40 hover:bg-blue-700'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="px-4 py-10 md:py-14">
        {activePage === 'home' && (
          <section className="max-w-5xl mx-auto text-center space-y-5">
            <p className="inline-flex items-center gap-2 border border-amber-200/60 bg-amber-300/20 text-amber-100 text-xs md:text-sm px-4 py-2 rounded-full">
              ✅ Registered Cybersecurity Services Provider
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Security through an African lens</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              We protect organizations across Africa with practical, context-aware cybersecurity
              programs that blend local threat intelligence and global standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-3">
              <button
                onClick={() => setActivePage('services')}
                className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-semibold py-2 px-6 rounded-full transition"
              >
                Explore Services
              </button>
              <button
                onClick={() => setActivePage('contact')}
                className="border border-amber-300 text-amber-100 hover:bg-amber-300 hover:text-blue-950 font-semibold py-2 px-6 rounded-full transition"
              >
                Book Consultation
              </button>
            </div>
          </section>
        )}

        {activePage === 'services' && (
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Cybersecurity Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((service) => (
                <article key={service.title} className="bg-blue-950/60 border border-blue-200/20 rounded-xl p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100">{service.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activePage === 'insights' && (
          <section className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Africa-Centric Security Insights</h2>
            <div className="bg-blue-950/60 border border-blue-200/20 rounded-xl p-6 space-y-3">
              <p className="text-blue-100">• Regional cyber threat analysis for financial services, government, and startups.</p>
              <p className="text-blue-100">• Secure AI adoption guidance for organizations scaling automation responsibly.</p>
              <p className="text-blue-100">• Advisory content that translates security complexity into actionable business decisions.</p>
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <section className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-3xl font-bold">Contact Afrisec Insights</h2>
            <p className="text-blue-100">Ready to strengthen your security posture? Let&apos;s start with a consultation.</p>
            <div className="bg-blue-950/60 border border-blue-200/20 rounded-xl p-6">
              <p className="text-lg">📩 contact@afrisec.octatechltd.com</p>
              <p className="text-blue-200 mt-3">Serving clients across Africa and globally.</p>
            </div>
          </section>
        )}
      </main>

      <footer className="text-center text-blue-100/80 pb-10 px-4">
        <p className="text-xs">&copy; {new Date().getFullYear()} Afrisec Insights. Built in Africa. Securing Africa&apos;s digital future.</p>
      </footer>
    </div>
  );
}

export default App;

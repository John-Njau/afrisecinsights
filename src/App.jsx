import './App.css';

function App() {

  return (
 <div className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Afrisec Insights</h1>
        <p className="text-xl text-green-400 font-medium">Security through the African lens</p>
        <p className="max-w-2xl mx-auto text-gray-400">
          Afrisec Insights is a cybersecurity collective focused on AI Security, Application Security, 
          Risk Management, and Cybersecurity Research — founded to amplify Africa's voice in global security.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full">
            Explore Blog
          </button>
          <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-2 px-6 rounded-full">
            Contact Us
          </button>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="text-green-400 text-3xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">Cybersecurity Services</h3>
          <p className="text-gray-400">
            Expert consulting in cloud security, app testing (SAST, DAST), GRC, and AI-driven automation.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="text-blue-400 text-3xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2">Africa-Centric Research</h3>
          <p className="text-gray-400">
            Original research and analysis contextualized to Africa’s digital threat landscape.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="text-yellow-400 text-3xl mb-4">🌍</div>
          <h3 className="text-xl font-bold mb-2">Global Collaboration</h3>
          <p className="text-gray-400">
            Partnering with thought leaders, open-source communities, and enterprises globally.
          </p>
        </div>
      </section>

      <footer className="text-center mt-20 text-gray-500">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-green-400 text-lg">📩</span>
          <span className="text-sm">contact@afrisec.octatechltd.com</span>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Afrisec Insights. Built in Africa. Powered by purpose.
        </p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="min-h-screen bg-gray-100 text-gray-900">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#385CAD]">Profesores Autores</div>
        <nav className="space-x-4">
          <a href="#" className="text-[#385CAD] font-medium">Explorar</a>
          <a href="#" className="text-[#385CAD] font-medium">Sube tu recurso</a>
          <a href="#" className="text-white bg-[#EE7623] px-4 py-2 rounded">Iniciar sesión</a>
        </nav>
      </div>
    </header>

    <section className="bg-[#3CB4E5] text-white py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Comparte tus recursos. Inspira a otros docentes.</h1>
      <p className="text-lg md:text-xl mb-8">Gana dinero con tus materiales educativos. Protege tu trabajo. Llega a miles de profesores en toda Hispanoamérica.</p>
      <a href="#" className="bg-white text-[#3CB4E5] font-bold px-6 py-3 rounded shadow">Sube tu primer recurso</a>
    </section>

    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Últimos recursos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <div className="h-40 bg-gray-200 mb-4"></div>
          <h3 className="text-lg font-semibold">Pack de fichas de matemáticas</h3>
          <p className="text-sm text-gray-600">por Laura Gómez</p>
          <p className="font-bold mt-2">3,50 €</p>
          <button className="mt-4 w-full bg-[#EE7623] text-white py-2 rounded">Ver recurso</button>
        </div>
      </div>
    </section>

    <footer className="bg-white py-8 border-t text-center text-sm text-gray-500">
      © 2025 Profesores Autores. Todos los derechos reservados.
    </footer>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
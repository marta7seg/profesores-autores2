import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError('Error al crear la cuenta');
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Crear cuenta</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" className="w-full p-2 border rounded mb-4"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-[#385CAD] text-white py-2 rounded">Registrarse</button>
      <p className="mt-4 text-sm">¿Ya tienes cuenta? <Link to="/login" className="text-blue-600">Inicia sesión</Link></p>
    </form>
  );
}

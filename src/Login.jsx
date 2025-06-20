import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" className="w-full p-2 border rounded mb-4"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-[#385CAD] text-white py-2 rounded">Entrar</button>
    </form>
  );
}
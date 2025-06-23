export default function Login() {
  return (
    <div style={{ border: '1px solid black', padding: '2rem' }}>
      <h2>Iniciar sesión</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Contraseña" />
      <button>Entrar</button>
    </div>
  );
}
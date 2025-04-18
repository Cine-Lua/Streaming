import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./LoginUser.css";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/home");
    } catch {
      alert("E-mail ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
        <div className="top-right">
          <div className="text-top-right">
          <p className="textoCadastro">Ainda não tem uma conta?</p>
          </div>
          <div className="register">
            <Link to="/register"> Criar conta</Link>
          </div>
        </div>
      <form onSubmit={handleLogin} className="login-form">
        <h2>Entrar no Streaming</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
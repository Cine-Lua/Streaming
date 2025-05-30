import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import "../Login/LoginUser.css";

export default function RegisterUser() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const cadastrar = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert("Usuário criado com sucesso!");
        navigate("/"); // volta pro login
      })
      .catch((erro) => {
        alert("Erro ao cadastrar: " + erro.message);
      });
  };

  return (
    <div className="containerLogin">
      <div className="login-container">
          <div className="top-right">
            <div className="text-top-right">
            <p className="textoCadastro">Já tem uma conta?</p>
            </div>
            <div className="register">
              <Link to="/"> Login</Link>
            </div>
          </div>
        <form onSubmit={cadastrar} className="login-form">
          <h2>Cadastro</h2>
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
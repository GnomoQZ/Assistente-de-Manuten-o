import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCU34TdZmsOw6T8MX36jcLoqW-qgOKPzik",
  authDomain: "assistentemanutencaocafe.firebaseapp.com",
  projectId: "assistentemanutencaocafe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// 🔐 LOGIN
window.login = function () {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const msg = document.getElementById("mensagem");

  if (!email || !senha) {
    msg.innerText = "Preencha email e senha";
    msg.style.color = "red";
    return;
  }

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      msg.innerText = "Login realizado com sucesso!";
      msg.style.color = "green";
      console.log("Usuário:", userCredential.user.email);
    })
    .catch((error) => {
      console.error(error.code, error.message);
      msg.innerText = "Erro: " + error.code;
      msg.style.color = "red";
    });
};

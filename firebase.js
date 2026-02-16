import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Configuração do Firebase (use a SUA)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de login
window.login = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      msg.innerText = "Login realizado com sucesso!";
      msg.style.color = "green";

      // Aqui depois vamos redirecionar para o sistema
    })
    .catch((error) => {
      msg.innerText = "Erro: " + error.message;
      msg.style.color = "red";
    });
};

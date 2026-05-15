function altaPressao() {
  alert("Alta Pressão: Ideal para prédios e sistemas que exigem força total!");
}

function submersivel() {
  alert("Submersíveis: Bombas projetadas para trabalhar dentro da água!");
}

function manutencao() {
  alert("Manutenção: Suporte técnico especializado para todos os modelos!");
}
function enviarMensagem(){
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
}

const emailValido = "admin@admin.com";
const senhaValida = "admin123";

function fazerLogin(){
  const email = document.getElementById("campoEmail").value;
  const senha = document.getElementById("campoSenha").value;

  if (email!==emailValido && senha!==senhaValida){
    window.alert("Confira ambas as credenciais");
    return;
  }

  if(email!==emailValido){
    window.alert("Confira o seu email");
    return;
  }
  if (senha!==senhaValida){
    window.alert("Confira sua senha");
    return;
  }  
  window.location.href="sistemainterno.html";  
}
function sair() {
      window.location.href = "index.html";
    }

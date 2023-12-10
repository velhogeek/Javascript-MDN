// Gera um número aleatório de 1 a 100
var numero = Math.floor(Math.random() * 100) + 1;

// Inicializa a lista de palpites
var palpites = [];

// Função para adivinhar o número
function adivinhar() {
  // Obtém o palpite do usuário
  var palpite = document.querySelector("#palpite").value;

  // Adiciona o palpite à lista
  palpites.push(palpite);

  // Verifica se o palpite está correto
  if (palpite == numero) {
    alert("Acertou! O número sorteado foi " + numero);
  } else {
    // Verifica se o palpite é muito baixo ou muito alto
    if (palpite < numero) {
      alert("O palpite é muito baixo.");
    } else {
      alert("O palpite é muito alto.");
    }
  }

  // Atualiza a lista de palpites na tela
  document.querySelector("#palpites").textContent = palpites.join(", ");
}
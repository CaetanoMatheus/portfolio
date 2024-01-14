// Calendario
var dataAtual = new Date();
var nomesMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];
var nomesDias = [
  "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
  "Quinta-Feira", "Sexta-Feira", "Sabado"
];
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth(); // Os meses são indexados de 0 a 11
var ano = dataAtual.getFullYear();
var diaNome = dataAtual.getDay();
var diaNome = nomesDias[diaNome];
var mesNome = nomesMeses[mes];

document.querySelector("#dia").innerHTML = dia;
document.querySelector("#mes").innerHTML = mesNome;
document.querySelector("#ano").innerHTML = ano;
document.querySelector("#diaNome").innerHTML = diaNome;

// Função para adicionar tarefas
function adicionar() {
  var tarefa = document.getElementById("insert").value;
  if (tarefa.trim() !== "") {
    // cria um novo elemento de lista
    var newItem = document.createElement("dd");
    // botão
    var botao = document.createElement("submit");
    botao.textContent = "concluir";
    botao.className = "concluir";
    botao.onclick = function () {
      var listItem = this.parentNode;
      newItem.style.backgroundColor = "#008000";
      newItem.classList.toggle("concluido");
    }
    // define o texto
    newItem.textContent = tarefa;
    // cria o botão
    newItem.appendChild(botao)
    // cria o item na lista
    document.getElementById("list").appendChild(newItem)

    // limpa o input depois de clicar no botão
    document.getElementById("insert").value = "";
  }
}

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    adicionar();
  }
});

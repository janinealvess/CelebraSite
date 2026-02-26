function mostrarSecao(id) {
  // 1. Esconde todas as seções (elementos com a classe 'secao')
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    secao.style.display = 'none'; // Esconde cada seção
  });

  // 2. Mostra a seção que foi solicitada, com base no ID
  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.style.display = 'block'; // Mostra a seção

    // Animar a entrada da seção
    setTimeout(() => {
      secaoSelecionada.classList.add('mostrarTransicao');
    }, 10); // Espera 10ms
  }

  // 3. Atualiza o estilo dos links do menu para destacar o ativo
  const links = document.querySelectorAll('nav a, #sidebar a'); // Seleciona todos os links do menu principal e do menu lateral

  // Remove a classe 'active' de todos os links
  links.forEach(link => {
    link.classList.remove('active');
    // Adiciona a classe 'active' no link clicado (com base no ID passado)
    if (link.getAttribute('onclick')?.includes(id)) {
      link.classList.add('active');
    }
  });

}
function abrirSidebar() {
  document.getElementById('sidebar').classList.add('ativo'); // Exibe o sidebar
  document.getElementById('overlay').style.display = 'block'; // Mostra o fundo escurecido (overlay)
}

function fecharSidebar() {
  document.getElementById('sidebar').classList.remove('ativo'); //Fecha o sidebar
  document.getElementById('overlay').style.display = 'none'; //Retira o fundo escurecido
}

// Define a data e hora final da contagem regressiva
const destino = new Date("August 16,2025 17:00").getTime();

// Atualiza o contador a cada segundo (1000 milissegundos) e repete a cada intervalo
setInterval(function () {
  let dataAtual = new Date().getTime(); // Pega o horário atual em que a pagina esta sendo executada

  let segTotal = (destino - dataAtual) / 1000; // Calcula a diferença total em segundos
  let dias = parseInt(segTotal / 86400);  // Calcula o número de dias restantes
  segTotal = segTotal % 86400; // Resto do tempo em segundos, sem os dias

  let horas = parseInt(segTotal / 3600); // Calcula as horas restantes
  segTotal = segTotal % 3600;  // Resto do tempo em segundos, sem as horas

  let minutos = parseInt(segTotal / 60);// Calcula os minutos restantes
  let segundos = parseInt(segTotal % 60);// Calcula os segundos restantes

  // Atualiza o HTML com os valores da contagem
  document.getElementById('dias').innerHTML = dias;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;

  // Se chegar no dia do evento, exibe a mensagem especial
  if (dias === 0) {
    document.querySelector('#countdown h1').textContent = "Chegou o grande dia!";
  }

}, 1000); // Executa a função a cada 1 segundo


// chavePix -copiarPix()

function copiarPix () {
  const chavePix = document.getElementById('chavePix').textContent
  navigator.clipboard.writeText(chavePix).then(()=>{
    alert('Chave pix copiada!');
  });

}

// Quando o site carregar, mostra a seção com ID "home"
window.onload = () => {
  mostrarSecao('home');
};





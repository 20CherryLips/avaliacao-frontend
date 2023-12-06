const url_server = "http://localhost:8200"

// Função para mostrar perguntas
function mostrarPerguntas(perguntasId) {
  document.getElementById('carroQuestions').style.display = 'none';
  document.getElementById('caminhaoQuestions').style.display = 'none';

  document.getElementById(perguntasId).style.display = 'block';

  document.getElementById('btnCadastrarVeiculo').addEventListener('click', cadastrarVeiculo);
}



function cadastrarVeiculo() {
  console.log('Enviando dados ao servidor...');

  const dados = {
    tipo: document.getElementById('tipo').value,
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    placa: document.getElementById('placa').value,
    combustivel: document.getElementById('combustivel').value,
    anodefabricacao: document.getElementById('anodefabricacao').value,
    cor: document.getElementById('cor').value,
    quilometragem: document.getElementById('quilometragem').value,
    numeropassageiro: document.getElementById('numeropassageiro').value,
    capacidadeportamala: document.getElementById('capacidadeportamala').value,
    transmissao: document.getElementById('transmissao').value,
    eixo: document.getElementById('eixo').value,
    capacidadecarga: document.getElementById('capacidadecarga').value,
    tipocarroceria: document.getElementById('tipocarroceria').value,
    
  }

  fetch(`${url_server}/cadastro`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
    .then(response => response.json())
    .then(dados => {
      console.log('Resposta do servidor:', dados);
    })
    .catch(error => {
      console.error('Erro ao enviar dados para o servidor:', error);
    });
}


function veiculosCadastro() {
  // Limpa a tabela antes de popular com novos dados
  const tabela = document.querySelector('table');
  tabela.innerHTML = '';

  fetch(`${url_server}/veiculo`)
    .then(response => response.json())
    .then(data => {
      data.forEach(veiculo => {
        const elementTr = document.createElement('tr');
        const tdTipo = document.createElement('td');
        const tdMarca = document.createElement('td');
        const tdModelo = document.createElement('td');
        const tdPlaca = document.createElement('td');
        const tdCombustivel = document.createElement('td');
        const tdAnoDeFabricacao = document.createElement('td');
        const tdCor = document.createElement('td');
        const tdQuilometragem = document.createElement('td');
        const tdNumeroPassageiro = document.createElement('td');
        const tdCapacidadePortaMalas = document.createElement('td');
        const tdTransmissao = document.createElement('td');
        const tdEixo = document.createElement('td');
        const tdCapacidadeDeCarga = document.createElement('td');
        const tdTipoCarroceria = document.createElement('td');

        tdTipo.textContent = veiculo.tipo;
        tdMarca.textContent = veiculo.marca;
        tdModelo.textContent = veiculo.modelo;
        tdPlaca.textContent = veiculo.placa;
        tdCombustivel.textContent = veiculo.combustivel;
        tdAnoDeFabricacao.textContent = veiculo.anodefabricacao;
        tdCor.textContent = veiculo.cor;
        tdQuilometragem.textContent = veiculo.quilometragem;
        tdNumeroPassageiro.textContent = veiculo.numeropassageiro;
        tdCapacidadePortaMalas.textContent = veiculo.capacidadeportamala;
        tdTransmissao.textContent = veiculo.transmissao;
        tdEixo.textContent = veiculo.eixo;
        tdCapacidadeDeCarga.textContent = veiculo.capacidadecarga;
        tdTipoCarroceria.textContent = veiculo.tipocarroceria;


        elementTr.appendChild(tdTipo);
        elementTr.appendChild(tdMarca);
        elementTr.appendChild(tdModelo);
        elementTr.appendChild(tdPlaca);
        elementTr.appendChild(tdCombustivel);
        elementTr.appendChild(tdAnoDeFabricacao);
        elementTr.appendChild(tdCor);
        elementTr.appendChild(tdQuilometragem);
        elementTr.appendChild(tdNumeroPassageiro);
        elementTr.appendChild(tdCapacidadePortaMalas);
        elementTr.appendChild(tdTransmissao);
        elementTr.appendChild(tdEixo);
        elementTr.appendChild(tdCapacidadeDeCarga);
        elementTr.appendChild(tdTipoCarroceria);


        tabela.appendChild(elementTr);
      });
    })
    .catch(error => {
      console.error('Erro ao obter dados do servidor:', error);
    });
}
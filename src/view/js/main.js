const url_server = "http://localhost:8200"

function cadastrar() {
  console.log('Enviando dados ao servidor...');

  // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
  const dados = {
    tipo: document.querySelector('[name="tipo"]').value,
    marca: document.querySelector('[name="marca"]').value,
    modelo: document.querySelector('[name="modelo"]').value,
    placa: document.querySelector('[name="placa"]').value,
    combustivel: document.querySelector('[name="combustivel"]').value,
    anodefabricacao: document.querySelector('[name="anodefabricacao"]').value,
    cor: document.querySelector('[name="cor"]').value,
    quilometragem: document.querySelector('[name="quilometragem"]').value,
  }

  console.log(dados);

  // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
  fetch(`${url_server}/cadastro`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
    // Depois de feita a requisição, o front-end irá receber um retorno do servidor
    .then(response => response.json())
    // Se toda a requisição deu certo, será informado no log
    .then(dados => {
      console.log('Resposta do servidor:', dados);
      // Faça algo com a resposta do servidor, se necessário
    })
    // Caso tenha algum tipo de erro na requisição, é lançada a excessão
    .catch(error => {
      console.error('Erro ao enviar dados para o servidor:', error);
      // Trate os erros, se necessário
    });
}

function listarVeiculos() {
  fetch(`${url_server}/veiculo`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

  function listarPessoas() {

    // faça algo antes de montar a tabela, SE NECESSÁRIO

    fetch(`${url_server}/veiculo`)
      .then(response => response.json())
      .then(data => {
        // Inserindo os dados da pessoa na tabela
        // fazendo um loop usando forEach para percorrer todos os dados retornados pelo servidor
        data.forEach(veiculo => {
          // Criando os elementos HTML
          const tabela = document.querySelector('table');
          const elementTr = document.createElement('tr');
          const tdTipo = document.createElement('td');
          const tdMarca = document.createElement('td');
          const tdModelo = document.createElement('td');
          const tdPlaca = document.createElement('td');
          const tdCombustivel = document.createElement('td');
          const tdAnoDeFabricacao = document.createElement('td');
          const tdCor = document.createElement('td');
          const tdQuilometragem = document.createElement('td');

          // Inserindo os dados da veiculo no elemento	
          tdTipo.textContent = veiculo.tipo;
          tdMarca.textContent = veiculo.marca;
          tdModelo.textContent = veiculo.modelo;
          tdPlaca.textContent = veiculo.placa;
          tdCombustivel.textContent = veiculo.combustivel;
          tdAnoDeFabricacao.textContent = veiculo.anoDeFabricacao;
          tdCor.textContent = veiculo.Cor;
          tdQuilometragem.textContent = veiculo.Quilometragem;


          // Inserindo os elementos nas linhas da tabela (tr => TableRow)
          elementTr.appendChild(tdTipo);
          elementTr.appendChild(tdMarca);
          elementTr.appendChild(tdModelo);
          elementTr.appendChild(tdPlaca);
          elementTr.appendChild(tdCombustivel);
          elementTr.appendChild(tdAnoDeFabricacao);
          elementTr.appendChild(tdCor);
          elementTr.appendChild(tdQuilometragem);

          // Adicionando a linha com as informações na tabela
          tabela.appendChild(elementTr);
        });
      });
  }
}
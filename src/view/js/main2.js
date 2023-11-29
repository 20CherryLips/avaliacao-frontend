function mostrarPerguntas(perguntasId) {
    
    document.getElementById('carroQuestions').style.display = 'none';
    document.getElementById('caminhaoQuestions').style.display = 'none';

    document.getElementById(perguntasId).style.display = 'block';

    function cadastrarVeiculo() {
        alert('Veículo cadastrado com sucesso!');
    }
}
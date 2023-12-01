const url_server = "http://localhost:8200";

// Função para mostrar perguntas
function mostrarPerguntas(perguntasId) {
    document.getElementById('carroQuestions').style.display = 'none';
    document.getElementById('caminhaoQuestions').style.display = 'none';

    document.getElementById(perguntasId).style.display = 'block';
}


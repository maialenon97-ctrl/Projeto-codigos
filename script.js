// Selecionando elementos
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

// Função para adicionar tarefa
function addTask() {
    const taskText = input.value;

    if (taskText === '') {
        alert("Digite algo!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText} 
        <button onclick="this.parentElement.remove(); saveTasks()">X</button>
    `;
    
    list.appendChild(li);
    input.value = ''; // Limpa o campo
    saveTasks(); // Salva no banco de dados
}

// Função de "Banco de Dados" (Simples)
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('li').forEach(li => {
        tasks.push(li.innerText.replace('X', '').trim());
    });
    // Salva a lista como uma string no navegador
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// Carregar dados ao abrir a página
function loadTasks() {
    const saved = JSON.parse(localStorage.getItem('myTasks'));
    if (saved) {
        saved.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task} <button onclick="this.parentElement.remove(); saveTasks()">X</button>`;
            list.appendChild(li);
        });
    }
}

loadTasks();
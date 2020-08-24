var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');



// O "JSON.parse()" converte itend do formato JSON para Array
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];  


function renderTodos() {
    listElement.innerHTML = "";

    // for especifico para Arrays
    for (todo of todos) {
        var todoElement = document.createElement('li'); // criar elemento html
        var todoText = document.createTextNode(todo); // criar texto para um elemento

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo) // procura no array de 'todos' o indice 
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText); // adiciona um elemento no array
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1) // remove um elemento do array splice(posição, e quantidade)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    // O JSON.string converte itens do Array para JSON
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
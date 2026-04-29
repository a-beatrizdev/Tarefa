//1. Criando a classe Tarefa:
// Serve como um modelo para criar tarefas
// Exemplo:
// const tarefa1 = new Tarefa("Estudar javascript")

class Tarefa {
    constructor(texto) {
        // O construtor é executado automaticamente
        // Quando usamos "newTarefa"

        this.texto = texto;

        this.concluida = false

    }

    // Método toggle()
    // É uma palavra em inglês muito usada na programação
    // Significa - Alternar/trocar/inverter estado
    // Exemplo:
    // Ligado -> desligado
    // Aberto -> fechado
    // True -> false

    toggle() {

        // O operador ! significa "inverter"
        this.concluida = !this.concluida;

    }

}

// Classe App
// Essa classe controla toda a aplicação
// Ela é responsável por:
// - Adicionar tarefas 
// - Remover tarefas
// - Marcar tarefas
// - Atualizar a tela

class App {
    constructor() {

        // Array de tarefas 
        // Aqui ficam armazenados todos os objetos criados
        // Exemplo:
        // tarefa {texto: "1. Estudar, concluida: false"},
        // tarefa {texto: "1. Treinar, concluida: true"},

        this.tarefas = [];

    }

    adicionarTarefa() {

        // Pega o elemento input do html
        const input = document.getElementById("tarefaInput");

        // Pega o texto digitado pelu usuário
        const texto = input.value;

        // Verifica se o usuário deixou vazio
        // Se vazio == return encerrar o método imediatamente

        if (texto === "") return;

        // Cria um novo objeto da classe tarefa
        const novaTarefa = new Tarefa(texto);

        // Adiciona o objeto dentro do array tarefas
        this.tarefas.push(novaTarefa);

        // Limpa o campo input 
        input.value = "";

        //Atualiza a tela
        this.render();



    }

    render() {

        // Pega a lista do HTML
        const lista = document.getElementById("lista");

        // Isso evita duplicações na tela
        lista.innerHTML = "";



        this.tarefas.forEach((tarefa, index) => {
            const li = document.createElement("li");

            //innerHTML adiciona html dentro da li
            li.innerHTML = `

    <!--
          Se tarefa.concluida for TRUE:
          adiciona a classe "concluida"

          Se for FALSE:
          não adiciona nada
        -->

        <span class="${tarefa.concluida ? "concluida" : ""}">
          ${tarefa.texto}
        </span>

        <div>

          <!--
            Botão para concluir/desmarcar tarefa
          -->
          <button onclick="app.toggleTarefa(${index})">
            ✔
          </button>

          <!--
            Botão para remover tarefa
          -->
          <button onclick="app.removerTarefa(${index})">
            🗑️
          </button>

        </div>
      `;

            // Adiciona a <li> dentro da lista dentro <ul>

            lista.appendChild(li);



        });

        // Conta quantas tarefas estão concluídas
        const concluidas = this.tarefas.filter(t => t.concluida).length;

        // Total de tarefas
        const total = this.tarefas.length;

        // Calcula as pendentes
        const pendentes = total - concluidas;

        // Atualiza o texto no HTML
        const resumo = document.getElementById("resumo");
        resumo.textContent = `Concluídas: ${concluidas} | Pendentes: ${pendentes}`;


    }

    toggleTarefa(index) {
        this.tarefas[index].toggle();
        this.render();
    }

    removerTarefa(index) {
        this.tarefas.splice(index, 1);
        this.render();
    }

}

// -------------------------------------
// CRIAÇÃO DO OBJETO PRINCIPAL 

// Aqui estamos criando UM OBJETO da classe App
// Esse objeto será responsável por controlar toda a aplicação. 
// Depois disso podemos usar:
// app.adicionarTarefa()
// app.render()
// app.removerTarefa()

//
// -----------------------------------

const app = new App();






//1. Criando a classe Tarefa:
// Serve como um modelo para criar tarefas
// Exemplo:
// const tarefa1 = new Tarefa("Estudar javascript")

class Tarefa {
    constructor(texto){
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






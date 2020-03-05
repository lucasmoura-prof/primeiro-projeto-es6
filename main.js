class List {
    constructor() {
        this.data = [];
    }

    add(value) {
        this.data.push(value);
        this.print();
    }

    pop() {
        this.data.pop();
        this.print();
    }

    print() {
        console.log(this.data);
    }
}


class TodoList extends List {
    print() {
        console.log("Imprimindo todoList");
        super.print();
    }
}

class Matematica {
    static soma(valueA, valueB) {
        return valueA + valueB;
    }
}

const minhaLista = new TodoList();
console.log(Matematica.soma(5, 7));


document.getElementById('novotodo').onclick = function () {
    minhaLista.add('Qualquer coisa');
}

document.getElementById('remover').onclick = function () {
    minhaLista.pop();
}
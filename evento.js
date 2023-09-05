"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEventos(evento) {
        this.eventos.push(evento);
    }
    visualizar() {
        console.log("meus eventos são: ");
        for (let i = 0; i < this.eventos.length; i++) {
            console.log(this.eventos[i].nome + "na data" + this.eventos[i].data + this.eventos[i].horario);
        }
    }
    remover(evento) {
        this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
    }
}
const evento1 = new Evento("Nayeon's party", "29/02", "17:00");
const evento2 = new Evento("Jeongy's party", "29/03", "20:00");
const evento3 = new Evento("Momo's party", "29/04", "23:00");
const minhaAgenda = new Agenda();
minhaAgenda.adicionarEventos(evento1);
minhaAgenda.adicionarEventos(evento2);
minhaAgenda.adicionarEventos(evento3);
console.log(minhaAgenda.visualizar());
console.log(minhaAgenda.remover(evento3));
console.log(minhaAgenda.visualizar());

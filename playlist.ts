class Musica{
 titulo: string;
 artista: string;
 duracao: number;

 constructor(titulo: string, artista: string, duracao: number){
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
   }
}

class Playlist{
    private musicas: Musica[] = [];
    private reproduzindo: boolean = false;
    private indiceAtual: number = 0;
   
    constructor(){
    }

        adicionarMusica(musica: Musica ){
            this.musicas.push(musica);
    }

    reproduzir(){
        if(this.musicas.length > 0){
            this.reproduzindo = true;
            return "Reproduzindo: "
             + this.musicas[this.indiceAtual].titulo + ' - '
             + this.musicas[this.indiceAtual].artista;
        }
        else{
            return "A playlist está vazia";
        }
    }

    pausar(){
        if(this.reproduzindo == true){
            this.reproduzindo =  false;
            return "Musica pausada";
        }
        else{
            return "Nenhuma música está sendo reproduida";
        }
    }

    proxima(){
        if(this.musicas.length > 0){
            this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else{
            return "A Playlist está vazia";
        }
    }
}



const musica1 = new Musica("Enchated", "Taylor Swift", 200);
const musica2 = new Musica("ETA", "New Jeans", 500);
const musica3 = new Musica("Killin' Me Good", "JIHYO", 300);


const minhaPlaylist = new Playlist();
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);
minhaPlaylist.adicionarMusica(musica3);
console.log(minhaPlaylist.reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());

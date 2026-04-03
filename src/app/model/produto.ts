export class Produto {
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    preco: number = 0;
    quantidade: number = 0;
    sku: string = "";
    categoria: string = "";
    keywords: string = "";
    min_jogadores: number = 0;
    max_jogadores: number = 0;
    fotos: string[] = []; // Array para as várias fotos
}
export class Produto {
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    preco: number = 0;
    sku: string = "";
    categoria: string = "";
    keywords: string = "";
    min_jogadores: number = 0;
    max_jogadores: number = 0;
    fotos: string[] = []; // Array para as várias fotos

    detalhes_longos: string = ""; // Para aquele texto grande de descrição
    componentes: string[] = [];   // Uma lista de textos para os componentes
  
    especificacoes: {             // Um objeto para a ficha técnica
    idade?: string;
    tempo?: string;
    idioma?: string;
    lancamento?: string;
    editora?: string;
    designer?: string;
    mecanicas?: string;
    perfil?: string;
    } = {};
}
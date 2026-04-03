export class Produto {
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    preco: number = 0;
    quantidade: number = 0;
    keywords: string = "";
    
    // ADICIONE ESTA LINHA:
    // Ela permite que cada jogo tenha várias fotos (um array de textos)
    fotos: string[] = []; 
    
    // ADICIONE ESTA TAMBÉM (opcional, para o SKU da foto):
    sku: string = "";
    categoria: string = "";
}
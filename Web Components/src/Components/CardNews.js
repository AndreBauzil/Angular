class CardNews extends HTMLElement {    // Uma receita que herda comportamentos de um elemento html
    constructor() {     // Constructor da classe atual
        super(); // Constructor de quem ele esta herdando

        // Essa classe irá anexar uma sombra aberta
        const shadow = this.attachShadow({mode: "open"}) 
        // Dentro do html dessa sombra adicionamos um elemento
        shadow.innerHTML = "<h1>Hello World</h1>"
    }
}
// Chamamos o nosso elemento customizado e definimos qual elemento estamos customizando
customElements.define('card-news', CardNews)
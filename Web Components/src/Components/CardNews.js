class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement("div")
        const cardLeft = document.createElement("div")

        return componentRoot
    }

    styles(){
        
    }
}

customElements.define("card-news", CardNews)
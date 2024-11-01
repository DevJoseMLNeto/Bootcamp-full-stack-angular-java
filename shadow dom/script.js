class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML="<h1>Jesus é o Senhor</h1>"
    }
}

customElements.define('card-news', CardNews)

class JesusSenhor extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        
        this.atributo = this.getAttribute("autor")
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }

    build(){
        const elementRoot = document.createElement("div")
        elementRoot.classList.add("card")

        const cardLeft = document.createElement("div")
        cardLeft.classList.add("cardLeft")
        const autor = document.createElement("span")
        autor.classList.add("autor")
        autor.textContent="by José Morais " + this.atributo
        const link = document.createElement("a")
        link.classList.add("link")
        link.textContent = this.getAttribute("link")
        link.href=this.getAttribute("link-url")
        const text = document.createElement("p")
        text.classList.add("text")
        text.textContent=this.getAttribute("text")

        const cardRight = document.createElement("div")
        cardRight.classList.add("cardRight")
        const img = document.createElement("img")
        img.classList.add("img")
        img.style.backgroundColor="red"



        elementRoot.appendChild(cardLeft)
        elementRoot.appendChild(cardRight)
        cardLeft.appendChild(autor)
        cardLeft.appendChild(link)
        cardLeft.appendChild(text)
        cardRight.appendChild(img)

        return elementRoot
    }

    styles(){
        const style = document.createElement("style")

        style.textContent=`
        .card{
            border:2px solid black;
        }
        `
        return style
    }
}

customElements.define("jesus-senhor",JesusSenhor)
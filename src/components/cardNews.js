class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const newsAuthor = document.createElement("span");
        newsAuthor.textContent = this.getAttribute("author") || "Anonymous";
        
        const newsLinkTitle = document.createElement("a");
        newsLinkTitle.textContent = this.getAttribute("title");
        newsLinkTitle.href = this.getAttribute("link")

        const newsResume = document.createElement("p");
        newsResume.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("imagePath");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(newsAuthor)
        cardLeft.appendChild(newsLinkTitle)
        cardLeft.appendChild(newsResume)

        cardRight.appendChild(newsImage)
        
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            * {
                padding: 0;
                margin: 0;
            }

            .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .cardLeft {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .cardLeft span {
                font-weight: 400;
            }
            
            .cardLeft a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .cardLeft p {
                color: rgb(70, 70, 70);
            }
        `;

        return style
    }
}

customElements.define("card-news", cardNews);
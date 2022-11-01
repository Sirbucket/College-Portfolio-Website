export class Container {
    element : HTMLElement
    switched : boolean
    content : HTMLDivElement
    clone : Node
    cloneContent : HTMLElement
    constructor (list, app) {
        let itemTemplate = document.querySelector("#container"); 
        const length: number = list.length;
        this.clone = itemTemplate.cloneNode(true); 
        this.cloneContent = this.clone.content.querySelector(".container"); 
        for (let i: number = 0; i < length; ++i) { 
            this.content = this.cloneContent.querySelector(".contents"); //Create clone
            this.content.appendChild(list[i].element);
        }
        
        app.appendChild(this.cloneContent)
    }
}

export class Url {
    name : string = 'div';
    element : HTMLElement;
    
    constructor(html : string, name : string) {
        this.element = document.createElement(this.name);    
        this.element.innerHTML = `
            <label>
                <a class = "link" href = ${html} target = "_blank">
                    ${name}
                </a>
            </label>
        `
    }
}
import {Url, Container} from './controls';

const app : HTMLDivElement = document.querySelector("#app");

const ytUrlList = [];
const docsUrlList = [];
const githubUrlList = [];
const webgameUrlList = [];

function newUrl(url : string, name : string, list : Url[]) {
    const input = new Url(url, name);

    list.push(input);
    return input;
}

let weburl = newUrl("https://sharp-boyd-303a4c.netlify.app/", "Drawing Applet", webgameUrlList);
weburl = newUrl("https://tranquil-eclair-7690db.netlify.app/", "Erasing Background Game", webgameUrlList);
weburl = newUrl("https://illustrious-truffle-8bc51c.netlify.app/", "Warcraft Quiz Game", webgameUrlList);
weburl = newUrl("https://merry-trifle-35bc13.netlify.app/", "'Apple Muncher'", webgameUrlList);
weburl = newUrl("https://enchanting-donut-ffb84b.netlify.app/", "Todo List w/Local Storage", webgameUrlList);
weburl = newUrl("https://merry-empanada-9e3228.netlify.app/", "Weather Application", webgameUrlList);
weburl = newUrl("https://velvety-paprenjak-3b0508.netlify.app/", "Fun Face Maker App", webgameUrlList);

let giturl = newUrl("https://github.com/Sirbucket/drawingapplet", "Drawing Applet Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/Image-Eraser-Game", "Erasing Background Game Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/Quiz-game", "Warcraft Quiz Game Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/apple-muncher", "'Apple Muncher' Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/Todo-list-w-guideline", "Todo List Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/Weather-App", "Weather App Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/Face-Maker", "Face Maker Code", githubUrlList)
giturl = newUrl("https://github.com/Sirbucket/College-Portfolio-Website", "This Website!", githubUrlList)


const webgameContainer = new Container(webgameUrlList, app)
const gitContainer = new Container(githubUrlList, app)
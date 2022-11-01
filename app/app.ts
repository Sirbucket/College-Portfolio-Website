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

let ytUrl = newUrl("https://www.youtube.com/watch?v=BPU2_yDdKJY&list=PL6_Jde7DMApmZYyp2T-SU5FPYytz4cWiL", "Youtube Playlist of Weapons I am Proud of.", ytUrlList)

let docsUrl = newUrl("https://docs.google.com/document/d/1jS-qmonQ6pi7H0m_tKPEwyIGh0N4785eJN4ZPqAWRmM/edit?usp=sharing", "Witch D&D Class", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1502y3hhiK1hLGzhEAmag9Scy1F5L_ZTB8ba1QjaH7rk/edit?usp=sharing", "World Walker D&D Class", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1fFNizviLiZlCcmdmSK4s7KD5gvlRMmeD5n4EfFpV5tM/edit?usp=sharing", "Shaman, Low Level One Shot Class I made a long time ago.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1oYyHGBSgwj6ByAMDAHgunigar_GWmXR9RckNlvKR_Ew/edit?usp=sharing", "A document detailing my thoughts on a server I frequently play on.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1aHTcRuJjf_0RVDBrmRoclxr94tVQuKZW8kX91eolSt4/edit?usp=sharing", "A document containing a mechanic I got inspiration for from a dream.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/181WM9rvojaUSWOdCtPwSaLlZgW8NqlqcO5HfaI7XXjA/edit?usp=sharing", "A document containing fake lore I wrote and slowly went insane writing.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1psrpTrTh5q3uMA54kDtG87IGi4j52DMpB7vupwLHR30/edit?usp=sharing", "A document containing rebalancing ideas for melee traits in a game.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1ursUO4mavF1Wzrt2Lv1bfbw6ChfTY2OlJ_COjFftJHU/edit?usp=sharing", "A document containing my defense of a 'bad' weapon in TF2.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/17lFLt4UWB-k9hc5yFmpTNWUWuZiJN-YZx15xJ2FUkZM/edit?usp=sharing", "More rambles.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1v2Meyycavohpx8qcsdrWEpZ1ytfmSf21KSuxf3-T1iA/edit?usp=sharing", "More rambles again.", docsUrlList)
docsUrl = newUrl("https://docs.google.com/document/d/1F0c_98fkqGkSjc_bxm3qtQr9o_mRrqoM8Z0f9uOKcA0/edit?usp=sharing", "D&D Oneshot I made for endersession", docsUrlList)

const webgameContainer = new Container(webgameUrlList, app)
const gitContainer = new Container(githubUrlList, app)
const ytContainer = new Container(ytUrlList, app)
const docsContainer = new Container(docsUrlList, app)
const buttonForm = document.querySelector("#button-form");
const home = document.querySelector("#home");
const mission = document.querySelector("#mission");
const newspaper = document.querySelector("#news");
const goShare = document.querySelector("#shareBtn");
const goMission = document.querySelector("#missionBtn");
const goNews = document.querySelector("#newsBtn");
const goHomeToMission = document.querySelector("#mission button");
const goHomeToNews = document.querySelector("#news button");
const refresh = document.querySelector("#refresh");

const HIDDEN_CLASSNAME = "hidden";
const REFRESH_CLASSNAME = "refresh";

function printMission(event){
    event.preventDefault();
    goShare.classList.add(HIDDEN_CLASSNAME);
    goMission.classList.add(HIDDEN_CLASSNAME);
    goNews.classList.add(HIDDEN_CLASSNAME);
    home.classList.add(HIDDEN_CLASSNAME);
    mission.classList.remove(HIDDEN_CLASSNAME);
    newspaper.classList.add(HIDDEN_CLASSNAME);
    refresh.classList.add(HIDDEN_CLASSNAME);
    refresh.classList.remove(REFRESH_CLASSNAME);
}

function printNews(event){
    event.preventDefault();
    goShare.classList.add(HIDDEN_CLASSNAME);
    goMission.classList.add(HIDDEN_CLASSNAME);
    goNews.classList.add(HIDDEN_CLASSNAME);
    home.classList.add(HIDDEN_CLASSNAME);
    mission.classList.add(HIDDEN_CLASSNAME);
    newspaper.classList.remove(HIDDEN_CLASSNAME);
    refresh.classList.remove(HIDDEN_CLASSNAME);
    refresh.classList.add(REFRESH_CLASSNAME);
}

function printHome(event){
    event.preventDefault();
    goShare.classList.remove(HIDDEN_CLASSNAME);
    goMission.classList.remove(HIDDEN_CLASSNAME);
    goNews.classList.remove(HIDDEN_CLASSNAME);
    home.classList.remove(HIDDEN_CLASSNAME);
    mission.classList.add(HIDDEN_CLASSNAME);
    newspaper.classList.add(HIDDEN_CLASSNAME);
    refresh.classList.add(HIDDEN_CLASSNAME);
    refresh.classList.remove(REFRESH_CLASSNAME);
}

function refreshInside(){
    const todaysNews = randomNews();
    if(todaysNews.inside === inside.innerText){
        refreshInside();
    } else {
        header.innerText = todaysNews.header;
        inside.innerText = todaysNews.inside;
    }
}

goMission.addEventListener("click", printMission);
goNews.addEventListener("click", printNews);
goHomeToMission.addEventListener("click", printHome);
goHomeToNews.addEventListener("click", printHome);
refresh.addEventListener("click", refreshInside);
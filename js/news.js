const news = [
    {
        inside: "You don't need to think that you were abandoned by the world. The world never took you before.",
        header: "???",
    },
    {
        inside: "Opportunity does not knock, it presents itself when you beat down the door.",
        header: "Kyle Chandler",
    },
    {
        inside: "There is no man living that can not do more than he thinks he can.",
        header: "Henry Ford",
    },
    {
        inside: "Man cannot remake himself without suffering for he is both the marble and the sculptor.",
        header: "Alexis Carrel",
    },
    {
        inside: "It is never too late to be what you might have been.",
        header: "George Eliot",
    },
    {
        inside: "Being defeated is often a temporary condition. Giving up is what makes it permanent.",
        header: "Marilyn Vos Savant",
    },
    {
        inside: "All our dreams can come true–if we have the courage to pursue them.",
        header: "Walt Disney",
    },
    {
        inside: "If you’re going through hell, keep going.",
        header: "Winston Churchill",
    },
    {
        inside: "The greatest pleasure in life is doing what people say you cannot do.",
        header: "Walter Bagehot",
    },
    {
        inside: "Change your thoughts and you change your world.",
        header: "Norman Vincent Peale",
    },
];

const header = document.getElementById("header");
const inside = document.getElementById("inside");
const todaysNews = randomNews();

function randomNews(){
    return news[Math.floor(Math.random() * news.length)];
}

inside.innerText = todaysNews.inside;
header.innerText = todaysNews.header;
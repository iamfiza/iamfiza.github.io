function copyright() {
    const footer = document.getElementById("footer");

    footer.innerHTML = "<p>&copy; By Fiza Qureshi -" + new Date().getFullYear();
}

copyright();

function openNavBar() {
    const nav = document.getElementById("nav");
    nav.style.width = "100%";
}

function closeNavBar() {
    const nav = document.getElementById("nav");
    nav.style.width = "0%";

}


const get = function (url) {
    const data = fetch(url);

    const article = document.getElementById("article");

    data.then((a) => a.text().then((a) => article.innerHTML = a))
}
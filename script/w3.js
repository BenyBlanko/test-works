const url = "https://usersdogs.dmytrominochkin.cloud/dogs";
const urlPic = "https://usersdogs.dmytrominochkin.cloud";

let mainBlock = document.querySelector(".dogCard");
// console.dir(mainBlock);

let dogListUrl = fetch(url);

dogListUrl
    .then((response) => response.json())
    .then((json) => {
        mainBlock;
        json.map((v) => {
            mainBlock.append(createCard(v));
        });
    });

function createCard(data) {
    let cardBody = document.createElement("div");
    let textCont = document.createElement("div");
    let cardPhoto = document.createElement("img");
    let cardName = document.createElement("h4");
    let cardSex = document.createElement("p");

    cardBody.addEventListener("click", (e) => {
        console.dir(e);
    });

    cardPhoto.src = urlPic + data.dogImage;
    cardName.textContent = data.title;
    cardSex.textContent = data.sex;

    cardBody.className = "card";

    cardBody.append(cardPhoto);
    cardBody.append(textCont);
    textCont.append(cardName);
    textCont.append(cardSex);

    return cardBody;
}

function openInfo(data) {
    console.log("Новая вкладка");
}

const urlPic = "https://usersdogs.dmytrominochkin.cloud";

let dogCard = {};

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    dogCard[key] = val;
}

let dogCardDiv = document.querySelector(".aboutDog");

createCard();

function createCard() {
    dogCardDiv.innerHTML = `
            <img src="${urlPic + dogCard.dogImage}" alt="" />
            <h3>${dogCard.title}</h3>
            <p>Sex</p>
            <h4>${dogCard.sex}</h4>
            <p>Age</p>
            <h4>${dogCard.age}</h4>
            <p>Personality</p>
            <h4>
                ${dogCard.description}
            </h4>
            <button>Adopt Me</button>


    `;
}

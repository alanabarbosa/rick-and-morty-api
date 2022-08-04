const selectValue = document.querySelector("#SelectOption");
const boxImg = document.querySelector('.boxImg');
const innerImg = boxImg.getElementsByTagName('div');
const btcDisplay = document.querySelector('.boxInfo');

fetch('https://rickandmortyapi.com/api/character', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(function(json) {
        json.results.map(function(results) {
            nameCharacter = results.name
            imageCharacter = results.image
            locationCharacter = results.location.name
            genderCharacter = results.gender
            option = new Option(nameCharacter);
            selectValue.options[selectValue.options.length] = option;
            option.setAttribute("value", nameCharacter);
            const newDiv = document.createElement("div");
            newElements = boxImg.appendChild(newDiv)
            newElements.setAttribute('class', 'newElements')
            newElements.setAttribute('class', 'active')
            newElements.innerHTML += `<img src="${imageCharacter}" style="width:200px">`
            newElements.innerHTML += `<p><strong>Name:</strong> ${nameCharacter}</p>`;
            newElements.innerHTML += `<p><strong>City:</strong> ${locationCharacter}</p>`;
            newElements.innerHTML += `<p><strong>Gender:</strong> ${genderCharacter}</p>`;
        })
    })

selectValue.addEventListener("change", () => {
    valueSelect = selectValue.options[selectValue.selectedIndex].value;
    removeImg()
    showImg(selectValue.selectedIndex)
});

function removeImg() {
    for (let div of innerImg) {
        div.style.display = "none";
    }
}

function showImg(index) {
    const currentImg = boxImg.children[index - 1];
    currentImg.style.display = "block";
    // console.log(currentImg)
}
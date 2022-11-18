
function createPhotoCard(data, containerDiv) {
    const div = document.createElement("div");
    div.setAttribute("id", data.id);
    div.classList.add("fadeout");

    const img = document.createElement("img");
    img.setAttribute("src", data.url);
    img.setAttribute("alt", data.title);


    const h1 = document.createElement("h1");
    h1.innerText = data.title;

    div.appendChild(img);
    div.appendChild(h1);
    containerDiv.appendChild(div);
}

// function fadeOut(div) {
//     div.style.opacity = '0';
//     div.remove();
// }

let mainDiv = document.getElementById("container");

if (mainDiv) {
    let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos";
    fetch(fetchURL)
        .then(res => res.json())
        .then(photos => {
            let innerHTML = "";
            photos.forEach((photo) => {
                createPhotoCard(photo, mainDiv);
            });
    
           document.getElementById('items-count').innerHTML = `There are ${photos.length} photo(s) being shown`;
            addFadeOutEffect();
        })
}
let totalpostcount = photos.length;


function fadeOutEffect() {
    console.log(1)
    //  var fadeTarget = document.getElementsByClassName("fadeout");
    var fadeEffect = setInterval(() => {

        if (!this.style.opacity) {
            this.style.opacity = 1;
        }
        if (this.style.opacity > 0) {
            this.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            this.remove();
            totalpostcount--;
            document.getElementById('items-count').innerHTML = `There are ${totalpostcount} photo(s) being shown`;
        }
    }, 200);
}

function addFadeOutEffect() {
    var fades = document.getElementsByClassName("fadeout");
   
    for (var i = 0; i < fades.length; i++) {

        fades[i].addEventListener('click', fadeOutEffect);
       
    }
     
}

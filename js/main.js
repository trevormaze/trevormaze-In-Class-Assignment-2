var animals = 0;

document.querySelector("#catreveal").addEventListener("click", (e) => {
    if (document.querySelector(".cat img").style.opacity == 100) return;
    document.querySelector(".cat img").style.opacity = 100;
    document.querySelector("#cathide").style.opacity = 100;
    document.querySelector("#catreveal").classList.add("clicked");
    animals++;
    updateAnimalDisplay();
});
document.querySelector("#cathide").addEventListener("click", (e) => {
    if (document.querySelector(".cat img").style.opacity == 0) return;
    document.querySelector(".cat img").style.opacity = 0;
    document.querySelector("#cathide").style.opacity = 0;
    document.querySelector("#catreveal").classList.remove("clicked");
    animals--;
    updateAnimalDisplay();
});

document.querySelector("#dogreveal").addEventListener("click", (e) => {
    if (document.querySelector(".dog img").style.opacity == 100) return;
    document.querySelector(".dog img").style.opacity = 100;
    document.querySelector("#doghide").style.opacity = 100;
    document.querySelector("#dogreveal").classList.add("clicked");
    animals++;
    updateAnimalDisplay();
});
document.querySelector("#doghide").addEventListener("click", (e) => {
    if (document.querySelector(".dog img").style.opacity == 0) return;
    document.querySelector(".dog img").style.opacity = 0;
    document.querySelector("#doghide").style.opacity = 0;
    document.querySelector("#dogreveal").classList.remove("clicked");
    animals--;
    updateAnimalDisplay();
});

document.querySelector("#cowreveal").addEventListener("click", (e) => {
    if (document.querySelector(".cow img").style.opacity == 100) return;
    document.querySelector(".cow img").style.opacity = 100;
    document.querySelector("#cowhide").style.opacity = 100;
    document.querySelector("#cowreveal").classList.add("clicked");
    animals++;
    updateAnimalDisplay();
});
document.querySelector("#cowhide").addEventListener("click", (e) => {
    if (document.querySelector(".cow img").style.opacity == 0) return;
    document.querySelector(".cow img").style.opacity = 0;
    document.querySelector("#cowhide").style.opacity = 0;
    document.querySelector("#cowreveal").classList.remove("clicked");
    animals--;
    updateAnimalDisplay();
});

function updateAnimalDisplay() {
    document.querySelector("#animals").innerHTML = animals.toString();
}

document.querySelector("#reset").addEventListener("click", (e) => {
    document.querySelector(".cat img").style.opacity = 0;
    document.querySelector("#cathide").style.opacity = 0;
    document.querySelector("#catreveal").classList.remove("clicked");

    document.querySelector(".dog img").style.opacity = 0;
    document.querySelector("#doghide").style.opacity = 0;
    document.querySelector("#dogreveal").classList.remove("clicked");

    document.querySelector(".cow img").style.opacity = 0;
    document.querySelector("#cowhide").style.opacity = 0;
    document.querySelector("#cowreveal").classList.remove("clicked");

    animals = 0;
    updateAnimalDisplay();
});


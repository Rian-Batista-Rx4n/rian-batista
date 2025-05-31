var menu = document.getElementById("menu_icon")
var menu_gui = document.getElementById("menu")
var audio = document.getElementById("meuAudio")
const audioToggle = document.getElementById("audio_toggle");
let soundEnabled = localStorage.getItem("soundEnabled") === "true";

audioToggle.textContent = soundEnabled ? "🔊" : "🔇";

audioToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    audioToggle.textContent = soundEnabled ? "🔊" : "🔇";
    localStorage.setItem("soundEnabled", soundEnabled);
});

var rian = document.getElementById("rian")
rian.style.marginLeft = `33.5%`
var texto_1 = document.getElementById("texto_1")
texto_1.style.marginLeft = `23%`
texto_1.style.opacity = `100%`
var subtexto = document.getElementById("subtexto")
subtexto.style.marginLeft = `13.16%`
var rx4n_foto = document.getElementById("rx4n_foto")
rx4n_foto.style.opacity = `100%`

menu.addEventListener("click", menu_trigger)

let menuIsOpen = false

function menu_trigger() {
    if (soundEnabled) {
        audio.play()
    }
    if (menuIsOpen == false) {
        menuIsOpen = true
        menu_gui.style.width = `20em`
        menu_gui.style.height = `20em`
    } else {
        menuIsOpen = false
        menu_gui.style.width = `0vw`
        menu_gui.style.height = `0vw`
    }
}

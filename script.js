const btnEl = document.querySelector(".btn-show-all");

btnEl.addEventListener("mouseover", (event)=> {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})

const jobEl = document.querySelector(".job");
const careers = ["Student from ITB", "Junior Developer", "Athlete"]
let careerIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
    characterIndex++;
    jobEl.innerHTML = `<h4>And I'm ${careers[careerIndex].slice(0,1) === "A" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h4>`;
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 150);
}
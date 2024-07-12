const container = document.querySelector(".container");
const refreshButton = document.querySelector(".refresh-btn");

const totalPaletteBoxes = 32;

const createPalette = () => {
    container.innerHTML = ""; 
    for (let i = 0; i < totalPaletteBoxes; i++) {
        let hexColor = Math.floor(Math.random() * 0xffffff).toString(16);
        hexColor = `#${hexColor.padStart(6, "0")}`;
        
        const colorElement = document.createElement("li");
        colorElement.classList.add("color");
        colorElement.innerHTML = `<div class="rect-box" style="background: ${hexColor}"></div>
                                  <span class="hex-value">${hexColor}</span>`;
        colorElement.addEventListener("click", () => copyToClipboard(colorElement, hexColor));
        container.appendChild(colorElement);
    }
}
createPalette();

const copyToClipboard = (element, hexCode) => {
    const hexValueElement = element.querySelector(".hex-value");
    navigator.clipboard.writeText(hexCode).then(() => {
        hexValueElement.innerText = "Copied";
        setTimeout(() => hexValueElement.innerText = hexCode, 1000);
    }).catch(() => alert("Failed to copy the color code!"));
}

refreshButton.addEventListener("click", createPalette);

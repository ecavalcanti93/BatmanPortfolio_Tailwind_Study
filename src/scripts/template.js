import { villains } from "./data.js";

const templateVillains = document.querySelector('[data-template="villains-card"]');

const villainsUl = document.querySelector("#villains ul")

villains.forEach(villain => {
    const card = templateVillains.content.cloneNode(true);
    const image = card.querySelector("img");
    const title = card.querySelector("h5");
    const description = card.querySelector("p");
    const link = card.querySelector("a");
    const link2 = card.querySelectorAll("a")[1];
    const link3 = card.querySelectorAll("a")[2];

    image.src = villain.image.src;
    image.alt = villain.image.alt;

    title.textContent = villain.title;
    description.textContent = villain.description;

    link.href = villain.link;
    link2.href = villain.link;
    link3.href = villain.link;

    villainsUl.appendChild(card);
});
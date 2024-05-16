const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.createElement("p");
p.classList.add("p");
p.textContent = "Hey I’m red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "pink";
box.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I’m in a div";

const pInsideDiv = document.createElement("p");
pInsideDiv.classList.add("p");
pInsideDiv.textContent = "ME TOO!";

box.appendChild(h1);
box.appendChild(pInsideDiv);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(box);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "orange";
});


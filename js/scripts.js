// 1 header
const ylatunniste = document.createElement("header");
ylatunniste.className = "ylatunniste";
// 1.1 headerin otsikko
const otsikko = document.createElement("h1");
const node1 = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(node1);
ylatunniste.appendChild(otsikko);
// 1.2 headerin kappale
const kappale1 = document.createElement("p");
const node2 = document.createTextNode("Ensimmäinen kappale Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam iste necessitatibus earum ipsam quaerat nemo dolorum nostrum reiciendis odio.");
kappale1.appendChild(node2);
// 1.3 lisätään headerin lapset
ylatunniste.appendChild(kappale1);

// 2. Section
const osa = document.createElement("section");
osa.setAttribute("id", "rinnakkain");
osa.style.display = "flex";
//2.1 Sectionin kappale
const kappale2 = document.createElement("p");
const node3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam iste necessitatibus earum ipsam quaerat nemo dolorum nostrum reiciendis odio.");
kappale2.appendChild(node3);
// 2.2 Sectionin kuva
const raami = document.createElement("figure");
raami.setAttribute("id", "rinnakkain");
const kuva = document.createElement("img")
kuva.src = "./img/machine.gif"
raami.appendChild(kuva);
//2.3 lisätään sectionin lapset
osa.appendChild(kappale2);
osa.appendChild(raami);
kappale2.style.flex = "1";
raami.style.flex = "1";

// 3. footer
const alatunniste = document.createElement("footer");
// 3.1 footerin kappale
const kappale3 = document.createElement("p")
const node4 = document.createTextNode("copiright 2024 Israt Jahan Naishe")
kappale3.appendChild(node4);
// 3.2 lisätään footerin lapsi
alatunniste.appendChild(kappale3)
// lisätään bodyn lapset
const runko = document.body;
runko.appendChild(ylatunniste);
runko.appendChild(osa);
runko.appendChild(alatunniste)
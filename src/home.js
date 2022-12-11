function createHome() {
  const home = document.createElement("div");
  home.classList.add("main-wrapper");

  const restImage = document.createElement("img");
  restImage.src =
    "https://t3.ftcdn.net/jpg/04/78/49/04/360_F_478490472_zDi7fiDEhoShE6xcYw08gIcfLw7fZefo.jpg";
  restImage.alt = "Restaurant";

  home.appendChild(
    createParagraph("Best food you'll ever have. (source: trust me)")
  );
  home.appendChild(createParagraph("Made with passion since yesterday."));
  home.appendChild(restImage);
  home.appendChild(createParagraph("Come visit us or not, do whatever!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;

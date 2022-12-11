function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-wrapper");

  menu.appendChild(
    createMenuItem(
      "https://images.unsplash.com/photo-1626074577290-bd33faacc121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Dumplings",
      "You're my dumpling."
    )
  );

  menu.appendChild(
    createMenuItem(
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      "Burgers",
      "Eat me :)"
    )
  );

  menu.appendChild(
    createMenuItem(
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "Pizza",
      "Yummy Pizza!"
    )
  );

  menu.appendChild(
    createMenuItem(
      "https://images.unsplash.com/photo-1633896949673-1eb9d131a9b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80",
      "Shawarma",
      "Mmmm, what a delight!"
    )
  );

  menu.appendChild(
    createMenuItem(
      "https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Steak",
      "Yum yum in my tum tum!"
    )
  );

  menu.appendChild(
    createMenuItem(
      "https://images.unsplash.com/photo-1604259597308-5321e8e4789c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80",
      "Poke Bowl",
      "Super healthy!"
    )
  );

  return menu;
}

function createMenuItem(image, name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-card");

  const foodImage = document.createElement("img");
  foodImage.src = `${image}`;
  foodImage.alt = `${name}`;

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact-wrapper");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 1 800 A Real Number";

  const address = document.createElement("p");
  address.textContent = "🏠 This is a real address";

  const feedback = document.createElement("p");
  feedback.textContent =
    "Feedback is highly appreciated. Don't worry, your village will not be destroyed.";

  const groupImage = document.createElement("img");
  groupImage.src =
    "https://w0.peakpx.com/wallpaper/602/448/HD-wallpaper-akatsuki-organization-anime.jpg";
  groupImage.alt = "Blaze's Edibles";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(feedback);
  contact.appendChild(groupImage);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;

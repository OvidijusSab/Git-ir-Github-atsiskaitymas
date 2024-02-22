import IntroModal from "./components/introTab.js"
import WorkModal from "./components/workTab.js";
import AboutModal from "./components/aboutTab.js";
import ContactModal from "./components/contactsTab.js";

document.querySelector("#introButton").addEventListener("click", function() {
  const modal = IntroModal();
  document.body.appendChild(modal);
  modal.showModal(); 
});

document.querySelector("#workButton").addEventListener("click", function() {
  const modal = WorkModal();
  document.body.appendChild(modal);
  modal.showModal(); 
});

document.querySelector("#aboutButton").addEventListener("click", function() {
  const modal = AboutModal();
  document.body.appendChild(modal);
  modal.showModal(); 
});

document.querySelector("#contactButton").addEventListener("click", function() {
  const modal = ContactModal();
  document.body.appendChild(modal);
  modal.showModal(); 
});

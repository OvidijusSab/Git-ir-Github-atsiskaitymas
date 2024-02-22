import IntroModal from "./components/introTab.js"
import WorkModal from "./components/workTab.js";

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

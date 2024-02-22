import IntroModal from "./components/introTab.js"

document.querySelector("#introButton").addEventListener("click", function() {
  const modal = IntroModal();
  document.body.appendChild(modal);
  modal.showModal(); 
});
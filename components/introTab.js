export default function IntroModal() {
  const introModal = document.createElement('dialog');
  introModal.classList.add('introModalClass');

  const header = document.createElement("h1");
  const headerText = document.createTextNode("INTRO");
  header.append(headerText); 

  const line = document.createElement('div');

  const video = document.createElement('video');
  video.setAttribute('src', "./resources/tab-1.mp4")
  video.setAttribute('type', 'video')
  video.setAttribute('width', '300px;')
  video.setAttribute('controls', "300")

  const par = document.createElement('p');
  const parText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus quas placeat ex corporis dolore quasi laudantium architecto, voluptate, labore corrupti vitae reiciendis eum nobis, libero ipsum? Reiciendis, suscipit saepe.");
  const span2 = document.createElement('span');
  const span2Text = document.createTextNode('Ingredients: ');
  span2.append(span2Text);
  par.append(parText);

  const par2 = document.createElement('p');
  const par2Text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus quas placeat ex corporis dolore quasi laudantium architecto, voluptate, labore corrupti vitae reiciendis eum nobis, libero ipsum? Reiciendis, suscipit saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis suscipit molestiae aut natus voluptatibus nulla eligendi! Tempora, totam quaerat!");
  par2.append(par2Text);

  const exitIcon = document.createElement('i');
  exitIcon.classList.add("bi", "bi-x-lg");

  document.querySelector("#main").classList.add("gone")
  document.querySelector("#header").classList.add("gone")
  document.querySelector("#body").classList.add("bodyPadding")

  introModal.addEventListener('keydown', e => {
    if (e.key === "Escape") {
      introModal.remove();
      document.querySelector("#main").classList.remove("gone")
      document.querySelector("#header").classList.remove("gone")
      document.querySelector("#body").classList.remove("bodyPadding")
    }
  })
  introModal.addEventListener('click', e => {
    const bounds = introModal.getBoundingClientRect();
    if (
      e.clientX < bounds.left ||
      e.clientX > bounds.right ||
      e.clientY < bounds.top ||
      e.clientY > bounds.bottom
    ) {
      introModal.remove();
      document.querySelector("#main").classList.remove("gone")
      document.querySelector("#header").classList.remove("gone")
      document.querySelector("#body").classList.remove("bodyPadding")
    }
  })
  exitIcon.addEventListener('click', () => {
    introModal.remove();
    document.querySelector("#main").classList.remove("gone")
    document.querySelector("#header").classList.remove("gone")
    document.querySelector("#body").classList.remove("bodyPadding")
  })

  introModal.append(header,line, video, par, par2, exitIcon);

  return introModal
}

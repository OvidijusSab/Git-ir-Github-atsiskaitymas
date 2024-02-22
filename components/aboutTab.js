export default function AboutModal() {
  const aboutModal = document.createElement('dialog');
  aboutModal.classList.add('photoModalClass');

  const header = document.createElement("h1");
  const headerText = document.createTextNode("ABOUT");
  header.append(headerText); 

  const line = document.createElement('div');

  const photo = document.createElement('img');
  photo.setAttribute('src', "./resources/tab-3.jpg")
  photo.setAttribute('alt', 'alt photo')

  const par = document.createElement('p');
  const parText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus quas placeat ex corporis dolore quasi laudantium architecto, voluptate, labore corrupti vitae reiciendis eum nobis, libero ipsum? Reiciendis, suscipit saepe.");
  const span2 = document.createElement('span');
  const span2Text = document.createTextNode('Ingredients: ');
  span2.append(span2Text);
  par.append(parText);

  const par2 = document.createElement('p');
  const par2Text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus quas placeat ex corporis dolore quasi laudantium architecto, voluptate, labore corrupti vitae reiciendis eum nobis, libero ipsum? Reiciendis, suscipit saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis suscipit molestiae aut natus voluptatibus nulla eligendi! Tempora, totam quaerat!");  par2.append(par2Text);

  const exitIcon = document.createElement('i');
  exitIcon.classList.add("bi", "bi-x-lg");

  document.querySelector("#main").classList.add("gone")
  document.querySelector("#header").classList.add("gone")
  document.querySelector("#body").classList.add("bodyPadding")

  aboutModal.addEventListener('keydown', e => {
    if (e.key === "Escape") {
      aboutModal.remove();
      document.querySelector("#main").classList.remove("gone")
      document.querySelector("#header").classList.remove("gone")
      document.querySelector("#body").classList.remove("bodyPadding")
    }
  })
  aboutModal.addEventListener('click', e => {
    const bounds = aboutModal.getBoundingClientRect();
    if (
      e.clientX < bounds.left ||
      e.clientX > bounds.right ||
      e.clientY < bounds.top ||
      e.clientY > bounds.bottom
    ) {
      aboutModal.remove();
      document.querySelector("#main").classList.remove("gone")
      document.querySelector("#header").classList.remove("gone")
      document.querySelector("#body").classList.remove("bodyPadding")
    }
  })
  exitIcon.addEventListener('click', () => {
    aboutModal.remove();
    document.querySelector("#main").classList.remove("gone")
    document.querySelector("#header").classList.remove("gone")
    document.querySelector("#body").classList.remove("bodyPadding")
  })

  aboutModal.append(header,line, photo, par, par2, exitIcon);

  return aboutModal
}

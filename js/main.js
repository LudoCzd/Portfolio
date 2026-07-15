const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const menuHidden = menu.classList.toggle('hidden');
  if (menuHidden) {
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    menuToggle.setAttribute('aria-expanded', 'true');
  }
});

const liensMenu = menu.querySelectorAll('a');
liensMenu.forEach((lien) => {
  lien.addEventListener('click', () => {
    menu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalGithub = document.getElementById('modal-github');

const modalOpen = document.querySelectorAll('[open-modal]');
modalOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    const projectKey = btn.getAttribute('open-modal');
    const project = projectsData[projectKey];

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalGithub.href = project.github;

    modal.classList.remove('hidden');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modalBackdrop.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
  }
});

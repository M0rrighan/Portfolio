// const openModalBtns = document.querySelectorAll('[href^="#Modal"]');
const openModalBtns = document.querySelectorAll('article .action a');
const closeModalBtns = document.querySelectorAll('.close_modal');
const overlay = document.getElementsByClassName('overlay')[0];
const b = document.querySelector('body');

function openModal(modal) {
  if (modal != null) {
    modal.classList.add('active');
    overlay.classList.add('active');
    b.style.overflowY = 'hidden';
  }
}

function closeModal(modal) {
  if (modal != null) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    b.style.overflowY = 'auto';
  }
}

openModalBtns.forEach((openBtn) => {
  openBtn.addEventListener('click', () => {
    const currentModal = document.querySelector(openBtn.getAttribute('href'));
    openModal(currentModal);
  });
});

closeModalBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const currentModal = document.querySelector('.modal.active');
    closeModal(currentModal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

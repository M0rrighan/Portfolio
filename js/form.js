const form = document.getElementById('form');
const email = document.getElementById('email');
const alertParent = document.querySelector('form ul li:last-child');
const alertMsg = document.createElement('small');
alertParent.appendChild(alertMsg);
alertMsg.style.visibility = 'hidden';
alertMsg.textContent = ' * Please change your email to lower case.';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.visibility = 'visible';
    email.style.border = '1px solid #e74c3c';
    e.preventDefault();
  } else {
    alertMsg.style.visibility = 'hidden';
    email.style.border = '1px solid #d0d9d4';
  }
});

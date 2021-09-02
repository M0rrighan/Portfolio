const form = document.getElementById('form');
const email = document.getElementById('email');
const alertParent = document.querySelector('form ul li:last-child');
const alertMsg = document.createElement('small');
alertParent.appendChild(alertMsg);
alertMsg.textContent = ' * Please change your email to lower case.';

// Variables and style for email validity and alert message
const alertParent = document.querySelector('form ul li:last-child');
const alertMsg = document.createElement('p');
alertParent.appendChild(alertMsg);
alertMsg.style.visibility = 'hidden';
alertMsg.textContent = ' * Please change your email to lower case.';
alertMsg.style.color = '#d62814';
alertMsg.style.paddingTop = '0.5rem';
alertMsg.style.fontWeight = 'bold';
alertMsg.style.fontSize = '1.25rem';

// Variables to access form values
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Form Email input validation
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.visibility = 'visible';
    email.style.border = '2px solid #d62814';
    e.preventDefault();
  } else {
    alertMsg.style.visibility = 'hidden';
    email.style.border = '1px solid #d0d9d4';
  }
});

// reads from localStorage and fills form fields with the stored values, if any
function retreiveAndPreFill() {
  const dataFromStorage = localStorage.getItem('database');
  if (dataFromStorage) {
    const retreivedObject = JSON.parse(dataFromStorage);
    username.value = retreivedObject.enteredName;
    email.value = retreivedObject.enterdEmail;
    message.value = retreivedObject.enterdMessage;
    return retreivedObject;
  }
  return '';
}

// Object to store in localStorage (as string)
const inputs = {
  enteredName: '',
  enterdEmail: '',
  enterdMessage: '',
};

function storeData() {
  if (localStorage.getItem('database') !== JSON.stringify(inputs)) {
    localStorage.setItem('database', JSON.stringify(inputs));
  }
}

// on change: update object values and store data
username.addEventListener('change', (e) => {
  inputs.enteredName = e.target.value;
  storeData();
});
email.addEventListener('change', (e) => {
  inputs.enterdEmail = e.target.value;
  storeData();
});
message.addEventListener('change', (e) => {
  inputs.enterdMessage = e.target.value;
  storeData();
});

retreiveAndPreFill();

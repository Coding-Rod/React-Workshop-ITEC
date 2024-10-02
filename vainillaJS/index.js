const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  // Add the text from the input to the list
  const text = input.value;
  const li = document.createElement('li');
  li.innerText = text;
  list.appendChild(li);
  input.value = '';

  // Add list to local storage
  localStorage.setItem('list', list.innerHTML);
});

// Load the list from local storage
window.onload = () => {
  list.innerHTML = localStorage.getItem('list');
}
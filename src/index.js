document.addEventListener("DOMContentLoaded", () => {
  function addToList() {
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    let input = document.getElementById('new-task-description').value;
    li.textContent = input;
    ul.appendChild(li);
  }

  document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    addToList();
    e.preventDefault();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('item');
  const unfinishedList = document.getElementById('unfinished-list');
  const finishedList = document.getElementById('finished-list');

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload
    const text = input.value.trim();
    if (text) {
      const listItem = createListItem(text);
      unfinishedList.appendChild(listItem);
      input.value = ''; // Clear input
    }
  });

  // Create a new list item with checkbox
  function createListItem(text) {
  const li = document.createElement('li');
  li.className = 'list-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';

  const span = document.createElement('span');
  span.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.className = 'delete-button';

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  // Checkbox behavior
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      finishedList.appendChild(li);
      span.classList.add('finished-text');
    } else {
      unfinishedList.appendChild(li);
      span.classList.remove('finished-text');
    }
  });

  // Delete behavior
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  return li;
}

});

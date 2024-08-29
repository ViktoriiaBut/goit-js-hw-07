
const input = docget.ElementById('name-input');

const output = get.ElementById('name-output');

input.addEventListener('input', () => {
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue === '' ? 'Anonymus' : trimmedValue;

});
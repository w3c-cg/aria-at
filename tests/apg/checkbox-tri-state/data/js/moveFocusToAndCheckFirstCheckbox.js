// sets focus on the first checkbox and sets its state to checked
const checkbox = testPageDocument.querySelector('[role="checkbox"]');
checkbox.setAttribute('aria-checked', 'true');
checkbox.focus();

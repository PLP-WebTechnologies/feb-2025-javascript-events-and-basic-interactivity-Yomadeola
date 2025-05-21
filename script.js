// Button click to change text and color
document.getElementById('magic-btn').addEventListener('click', () => {
  const text = document.getElementById('btn-text');
  text.textContent = 'You clicked the magic!';
  text.style.color = '#4a90e2';
});

// Keypress detection
const keyInput = document.getElementById('key-input');
const keyDisplay = document.getElementById('key-display');
keyInput.addEventListener('keyup', (e) => {
  keyDisplay.textContent = `You typed: ${e.key}`;
});

// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    const target = document.getElementById(`tab-${tab.dataset.tab}`);
    target.classList.remove('hidden');
  });
});

// Double-click bonus
document.getElementById('hover-img').addEventListener('dblclick', () => {
  alert("Double-click secret unlocked! ");
});

// Form validation
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('form-feedback');

  let messages = [];
  if (!email.value.includes('@')) messages.push("Invalid email format.");
  if (password.value.length < 8) messages.push("Password must be at least 8 characters.");

  feedback.textContent = messages.length ? messages.join(' ') : "Form submitted successfully! 🎉";
  feedback.style.color = messages.length ? "red" : "green";
});

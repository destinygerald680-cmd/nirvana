const form = document.getElementById('signup-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const togglePassword = document.getElementById('togglePassword');

function showError(el, message) {
  const err = document.getElementById('err-' + el.id.replace(/([A-Z])/g,'-$1').toLowerCase().replace(/^-/,''));
  if (err) err.textContent = message || '';
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate() {
  let ok = true;
  // Full name
  if (!fullName.value.trim()) { showError(fullName, 'Please enter your full name'); ok = false } else { showError(fullName, '') }
  // Email
  if (!email.value.trim()) { showError(email, 'Email is required'); ok = false }
  else if (!validateEmail(email.value.trim())) { showError(email, 'Enter a valid email address'); ok = false } else { showError(email, '') }
  // Password
  if (!password.value) { showError(password, 'Password is required'); ok = false }
  else if (password.value.length < 8) { showError(password, 'Use at least 8 characters'); ok = false } else { showError(password, '') }
  // Confirm
  if (confirmPassword.value !== password.value) { showError(confirmPassword, 'Passwords do not match'); ok = false } else { showError(confirmPassword, '') }
  // Terms
  if (!terms.checked) { showError(terms, 'You must accept the terms'); ok = false } else { showError(terms, '') }
  return ok;
}

if (togglePassword) {
  togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Mock submission: replace with real API call
    const payload = {
      name: fullName.value.trim(),
      email: email.value.trim()
    };
    // Visual feedback
    const btn = document.getElementById('signup-btn');
    if (btn) { btn.textContent = 'Creating...'; btn.disabled = true }
    console.log('Sign-up payload', payload);
    setTimeout(() => {
      if (btn) { btn.textContent = 'Create account'; btn.disabled = false }
      // show success message
      alert('Account created successfully (mock).');
      form.reset();
    }, 900);
  });
}

// Small log to confirm script loaded
console.log('app.js: signup module initialized');

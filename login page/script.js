function toggleForms() {
    document.querySelectorAll('.form-container').forEach(container => {
        container.classList.toggle('hidden');
    });
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        alert('Signup successful!');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
});

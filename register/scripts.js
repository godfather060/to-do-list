document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            alert('Registration successful!');
            window.location.href = '/register/login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email && user.password === password) {
                sessionStorage.setItem('loggedIn', 'true');
                alert('Login successful!');
                window.location.href = '/main/index.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            sessionStorage.removeItem('loggedIn');
            window.location.href = '/register/login.html'; // Adjust to your actual path if different
        });
    }

    // Redirect to login page if not logged in
    if (window.location.pathname.endsWith('index.html') && !sessionStorage.getItem('loggedIn')) {
        window.location.href = '/register/login.html'; // Adjust to your actual path if different
    }
});

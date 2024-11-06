function toggleForm() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    
    loginSection.style.display = (loginSection.style.display === 'none') ? 'block' : 'none';
    registerSection.style.display = (registerSection.style.display === 'none') ? 'block' : 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            localStorage.setItem('userLoggedIn', JSON.stringify(user));
            window.location.href = 'index.html'; 
        } else {
            alert('Usuário ou senha incorretos!');
        }
    } else {
        alert('Preencha todos os campos');
    }
}

function register() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.username === newUsername)) {
            alert('Nome de usuário já existe!');
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));

            localStorage.setItem('userLoggedIn', JSON.stringify({ username: newUsername, password: newPassword }));
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html';
        }
    } else {
        alert('Preencha todos os campos');
    }
}

function logout() {
    localStorage.removeItem('userLoggedIn'); 
    window.location.href = 'login.html';
}

function checkLoginStatus() {
    const logoutButton = document.getElementById('logout-button');
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    
    if (userLoggedIn) {
        logoutButton.style.display = 'block';
    } else {
        logoutButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

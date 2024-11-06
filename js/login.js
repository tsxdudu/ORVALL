function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const alertContainer = document.getElementById('alert-container');

    // Função para exibir mensagens de alerta
    function showAlert(message, type = 'danger') {
        alertContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('userLoggedIn', JSON.stringify(user));
            showAlert('Login realizado com sucesso!', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            showAlert('Usuário ou senha incorretos!');
        }
    } else {
        showAlert('Preencha todos os campos');
    }
}

function register() {
    // Função de exemplo para cadastro de novo usuário
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const alertContainer = document.getElementById('alert-container');

    if (newUsername && newPassword) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.username === newUsername)) {
            showAlert('Nome de usuário já existe!', 'warning');
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            showAlert('Cadastro realizado com sucesso!', 'success');
        }
    } else {
        showAlert('Preencha todos os campos');
    }
}

// Alterna entre login e registro
function toggleForm() {
    document.getElementById('login-section').style.display =
        document.getElementById('login-section').style.display === 'none' ? 'block' : 'none';
    document.getElementById('register-section').style.display =
        document.getElementById('register-section').style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    function passwordView() {
        const password = document.getElementById('password');
        const iconVis = document.querySelector('.fa-solid.fa-eye');
        const iconInv = document.querySelector('.fa-solid.fa-eye-slash');

        if (iconInv.classList.contains('active')) {
            iconInv.classList.remove('active');
            iconVis.classList.add('active');
            password.type = 'text';
        }
        else if (iconVis.classList.contains('active')) {
            iconVis.classList.remove('active');
            iconInv.classList.add('active');
            password.type = 'password';
        }
    }

    document.getElementById('icon-password').onclick = passwordView;

    document.getElementById('login-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        await fetch('https://backend-lbr.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
    });
});

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
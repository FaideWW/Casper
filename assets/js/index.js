window.onload = function () {
    var email = document.getElementsByClassName('maillink')[0];
    email.innerHTML = '<a href="mailto:' + email.innerHTML + '">Email</a>';
    console.log(email);
};
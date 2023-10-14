const show_derivative = document.getElementById("show_derivative");
const show_equity = document.getElementById("show_equity");
const d_leaderboard = document.getElementById("derivative_leaderboard_content_section");
const e_leaderboard = document.getElementById("equity_leaderboard_content_section");

show_derivative.addEventListener("click", function(){
    show_derivative.classList.remove("btn-light");
    show_derivative.classList.add("btn-dark");
    show_equity.classList.remove("btn-dark");
    show_equity.classList.add("btn-light");
    d_leaderboard.style.display = "block";
    e_leaderboard.style.display = "none";
});
show_equity.addEventListener("click", function(){
    show_derivative.classList.remove("btn-dark");
    show_derivative.classList.add("btn-light");
    show_equity.classList.remove("btn-light");
    show_equity.classList.add("btn-dark");
    d_leaderboard.style.display = "none";
    e_leaderboard.style.display = "block";
});

const show_password = document.getElementById("show_password");
const hide_password = document.getElementById("hide_password");
const password_input = document.getElementById("password_input");

show_password.addEventListener("click", function(){
    show_password.style.display = "none";
    hide_password.style.display = "block";
    password_input.type = "password";
});
hide_password.addEventListener("click", function(){
    show_password.style.display = "block";
    hide_password.style.display = "none";
    password_input.type = "text";
});




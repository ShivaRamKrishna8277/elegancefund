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
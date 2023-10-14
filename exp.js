document.getElementById("showSuccessMessage").addEventListener("click", function() {
    var modal = new bootstrap.Modal(document.getElementById("successModal"));
    modal.show();

    setTimeout(function() {
        modal.hide();
    }, 1500);
});





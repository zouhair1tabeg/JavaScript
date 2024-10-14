var P = document.getElementById("pas");
var val = document.getElementById("pro");

P.addEventListener("input" , function() {
    var password = P.value;
    var progress = 0;

    if (password.length >= 8) {
        progress += 1;
    }

    if (/[A-Z]/.test(password)) {
        progress += 1;
    }

    if (/[a-z]/.test(password)) {
        progress += 1;
    }

    if (/\d/.test(password)) {
        progress += 1;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        progress += 1;
    }

    val.value = progress;
});

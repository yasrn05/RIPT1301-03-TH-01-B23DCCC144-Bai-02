document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "manager.html";
    } else {
        document.getElementById("error").textContent = "Tài khoản hoặc mật khẩu không chính xác";
    }
});
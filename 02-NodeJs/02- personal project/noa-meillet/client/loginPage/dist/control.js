function showRegisterForm() {
    try {
        window.location.href = "../registerPage/register.html";
    }
    catch (error) {
        console.error("The register page is not found");
    }
}
function login(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var username = ev.target.elements.username.value;
        var password = ev.target.elements.password.value;
        var user = { username: username, password: password };
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(function (res) { return res.json(); })["catch"](function (error) {
            console.error(error);
        });
        window.location.href = "../mainPage/index.html";
    }
    catch (error) {
        console.error(error);
    }
}

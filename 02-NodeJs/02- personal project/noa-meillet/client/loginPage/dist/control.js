function createUser(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var nameOfBride = ev.target.elements.nameOfBride.value;
        var nameOfGroom = ev.target.elements.nameOfGroom.value;
        var weddingDate = ev.target.elements.weddingDate.value;
        var username = ev.target.elements.username.value;
        var password = ev.target.elements.password.value;
        var newUser = { nameOfBride: nameOfBride, nameOfGroom: nameOfGroom, weddingDate: weddingDate, username: username, password: password };
        //send to server:
        fetch("/api/users/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function showSignInForm() {
    try {
        if (!loginForm)
            throw new Error("We don't have any element to add your user");
        loginForm.innerHTML = "\n        <h3>Log In To Your Personal Wedding Planner:</h3>\n        <form class=\"sign-in-form\" onsubmit=\"login(event)\">\n        <input type=\"text\" name=\"username\" class=\"input\" placeholder=\"Username...\" required/>\n        <br />\n        <input type=\"password\" name=\"password\" class=\"input\" placeholder=\"Password...\" required/>\n        <br />\n        <input type=\"submit\" id=\"sign_in_btn\" value=\"Sign In\"/>\n        </form>\n    ";
    }
    catch (error) {
        console.error("The form to login have a problem");
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
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}

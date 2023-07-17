// the register function
function handleRegister(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var email_1 = event.target.elements.email.value;
        var password = event.target.elements.password.value;
        var userLogin = { name: name, email: email_1, password: password };
        if (!name)
            throw new Error("Name Requierd");
        if (!email_1)
            throw new Error("cant find user email");
        if (!password)
            throw new Error("cant find user password");
        fetch("/api/users/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        })
            .then(function (res) {
            console.log(res);
            if (res.status === 409) {
                alert("user already exists");
                throw new Error("user already exists");
            }
            else {
                return res.json();
            }
        })
            .then(function (data) {
            window.location.href = "app.html?" + "email=" + email_1;
        });
    }
    catch (error) {
        console.error(error);
    }
}
// the sign - in
function handleLogin(event) {
    event.preventDefault();
    try {
        var email_2 = event.target.elements.name.value;
        var password = event.target.elements.password.value;
        var userLogin = { email: email_2, password: password };
        var htmlEror = document.querySelector("#error");
        if (!email_2)
            throw new Error("user name is not valid");
        if (!password)
            throw new Error("cant find user password");
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        })
            .then(function (res) {
            console.log(res);
            if (res.status === 401) {
                alert("email/password incorrect");
                throw new Error("email/password incorrect");
            }
            else {
                return res.json();
            }
        })
            .then(function (data) {
            console.log(data);
            window.location.href = "./main.html?" + "email=" + email_2;
        });
    }
    catch (error) {
        console.error(error);
    }
    // the sign - in
    function handleLogin(event) {
        event.preventDefault();
        try {
            var name = event.target.elements.name.value;
            var password = event.target.elements.password.value;
            var userLogin = { name: name, password: password };
            var htmlEror = document.querySelector("#error");
            if (!name)
                throw new Error("user name is not valid");
            {
                htmlEror.innerHTML = "Name or Password incorrect";
            }
            if (!password)
                throw new Error("cant find user password");
            fetch("/api/users/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userLogin)
            })
                .then(function (res) { return res.json(); })
                .then(function (data) {
                console.log(data);
                window.location.href = "main.html";
            });
        }
        catch (error) {
            console.error(error);
        }
    }
}

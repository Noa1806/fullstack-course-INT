function createUser(ev) {
    try {
        ev.preventDefault();
        var nameOfBride = ev.target.elements.nameOfBride.value;
        if (!nameOfBride)
            throw new Error("No name of bride");
        var nameOfGroom = ev.target.elements.nameOfGroom.value;
        if (!nameOfGroom)
            throw new Error("No name of groom");
        var weddingDate = ev.target.elements.weddingDate.value;
        if (!weddingDate)
            throw new Error("No wedding date");
        var username = ev.target.elements.username.value;
        if (!username)
            throw new Error("No usrname");
        var password = ev.target.elements.password.value;
        if (!password)
            throw new Error("No Password");
        var user = {
            nameOfBride: nameOfBride,
            nameOfGroom: nameOfGroom,
            weddingDate: weddingDate,
            username: username,
            password: password
        };
        console.log(user);
        if (!user)
            throw new Error("no data to create user");
        //send to server:
        fetch("/api/users/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(function (res) {
            res.json();
        });
        if (!registerPage)
            throw new Error("register page element is not found");
        registerPage.html = "<div class=\"register-complete--msg\">\n        <h3>Congragulation!</h3>\n        <h4>We created your account</h4>\n        <button onclick=\"showLoginPage()\" class=\"btn\">LogIn</button>\n        </div>";
    }
    catch (error) {
        console.error('error- can not create user');
    }
    function showLoginPage() {
        try {
            window.location.href = "../loginPage/index.html";
        }
        catch (error) {
            console.error("The login page is not found");
        }
    }
}

// fetch all the info from the for
function createMyCard(event) {
    event.preventDefault();
    try {
        var age = event.target.elements.age.value;
        var gender = event.target.elements.gender.value;
        var location = event.target.elements.location.value;
        var height = event.target.elements.height.value;
        var kids = event.target.elements.kids.value;
        var smoking = event.target.elements.smoking.value;
        var education = event.target.elements.education.value;
        var job = event.target.elements.job.value;
        var relationship = event.target.elements.relationship.value;
        var info = event.target.elements.info.value;
        var religious = event.target.elements.religious.value;
        var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get('email');
        var userCard = {
            age: age,
            gender: gender,
            location: location,
            height: height,
            kids: kids,
            smoking: smoking,
            education: education,
            job: job,
            relationship: relationship,
            religious: religious,
            info: info,
            email: email
        };
        if (!userCard)
            throw new Error("cant find userCard Value's");
        fetch("/api/users/update", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCard)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            myPreferences();
            //  window.location.href = "./main.html?" + "email=" + email
        });
    }
    catch (error) {
        console.error(error);
    }
}
function createMyPrefferance(ev) {
    try {
        ev.preventDefault();
        console.log("createMyPrefferance");
        var elms = ev.target.elements;
        console.log(elms);
        var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get('email');
        var minHeight = elms.minimumHeight.value;
        var maxHeight = elms.maximumHeight.value;
        var minAge = elms.minimumAge.value;
        var maxAge = elms.maximumAge.value;
        var gender = elms.gender.value;
        var kids = elms.kids.value;
        var smoking = elms.smoking.value;
        var education = elms.education.value;
        var relationship = elms.relationship.value;
        var religious = elms.religious.value;
        var userPreffrance = {
            minHeight: minHeight,
            maxHeight: maxHeight,
            minAge: minAge,
            maxAge: maxAge,
            gender: gender,
            kids: kids,
            smoking: smoking,
            education: education,
            relationship: relationship,
            religious: religious,
            email: email
        };
        console.log(userPreffrance);
        if (!userPreffrance)
            throw new Error("cant find user prefferance");
        fetch("/api/prefferanceUser/addPrefferance", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userPreffrance)
        })
            .then(function (res) {
            if (res.status === 409) {
                throw new Error("preferrance already exists");
            }
            else {
                res.json();
            }
        })
            .then(function (data) {
            console.log(data);
            console.log("signin lets go");
            window.location.href = "login.html";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handlegetMyUser() {
    console.log("get user");
    try {
        fetch("/api/users/getusers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            console.log(users);
        });
    }
    catch (error) {
        console.error(error);
    }
}

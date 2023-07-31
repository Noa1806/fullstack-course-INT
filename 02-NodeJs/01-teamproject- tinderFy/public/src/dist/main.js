"use strict";
exports.__esModule = true;
function userProfileData() {
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get('email');
        fetch("/api/users/main", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email })
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            renderProfile(data["userCard"][0]);
        });
        console.log();
    }
    catch (error) { }
    function renderProfile(data) {
        var html = "\n  <div class=\"mainNav\">\n    <nav class=\"navBar\">\n         <ul class=\"navBar__ul\">\n             <li class=\"navBar__ul__li\" id=\"info\">Info</li>\n             <li class=\"navBar__ul__li\" onclick=\"findMatch('" + data.email + "')\">Find Match</li>\n             <li class=\"navBar__ul__li\">Messages</li>\n             <li class=\"navBar__ul__li\">Subscribe</li>\n         </ul>\n       </nav>  \n\n  \n        <div class=\"mainNav__userCard\">\n         <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bd/JenniferAnistonFeb09.jpg\" alt=\"JenniferAniston pic\" class=\"mainNav__userCard__img\">\n            <h2 class=\"mainNav__userCard__h2\"  style=\"color: red;\" id=\"h2User\"></h2>\n                <div class=\"edit\" onclick=\"editUser()\"></div>\n                <div class=\"delete\" onclick=\"deleteUser()\"></div>\n                <div class=\"imageUpload\" onclick=\"imageUpload()\"></div>\n      </div>\n         <div class=\"userProfileContainer\">\n            <p>Name:" + data.name + "</p>\n            <p>Subscribed: " + data.subscribed + "</p>\n            <p>Age: " + data.age + "</p>\n            <p>Gender: " + data.gender + "</p>\n          </div>\n\n  </div>\n  \n  <div class=\"usersCard\">\n  </div>";
        var body = document.querySelector("body");
        body.innerHTML = html;
    }
}
function findMatch(userEmail) {
    try {
        getUsers(userEmail);
    }
    catch (error) {
        console.error(error);
    }
}
function getUsers(userEmail) {
    try {
        fetch("/api/users/getusers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                if (!users)
                    throw new Error("didnt find users");
                renderUsers(users, userEmail);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUsers(users, userEmail) {
    try {
        if (!users)
            throw new Error("No users");
        var usersCard = document.querySelector(".usersCard");
        if (!usersCard)
            throw new Error("coundnt find users ecard on DOM");
        users.map(function (user) {
            if (user.email != userEmail)
                getPrefferance(user, userEmail);
            /*usersCard.innerHTML +=getPrefferance(user,userEmail)+`<div class="userCard">
                    <h3>Name:${user.name}</h3>
                    <p>Height: ${user.height}</p>
                    <p>Age: ${user.age}</p>
                    <p>Location: ${user.location}</p>
                    <p>Job: ${user.job}</p>
                    <p>Smoking: ${user.smoking}</p>
                    <p>Kids: ${user.kids}</p>
                    <p>Education: ${user.education}</p>
                    <p>Religious level: ${user.religious}</p>
                    <p>More about me: ${user.info}</p>
                    <br>
                  </div>`*/
        });
    }
    catch (error) {
        console.error(error);
    }
}
/*
function renderUser(user: User, userEmail:string) {
  try {
    
return `<div class="userCard">
                <h3>Name:${user.name}</h3>
                <p>Height: ${user.height}</p>
                <p>Age: ${user.age}</p>
                <p>Location: ${user.location}</p>
                <p>Job: ${user.job}</p>
                <p>Smoking: ${user.smoking}</p>
                <p>Kids: ${user.kids}</p>
                <p>Education: ${user.education}</p>
                <p>Religious level: ${user.religious}</p>
                <p>More about me: ${user.info}</p>
                <br>
              </div>`;
  } catch (error) {
    console.error(error);
    return "";
  }
}

 */
function getPrefferance(user, userEmail) {
    try {
        fetch("/api/prefferanceUser/get-user-prefferance", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userEmail: userEmail })
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (!data)
                throw new Error("coundnt find prefferance for this user");
            matchingPercent(data["userPrefferance"], user);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function matchingPercent(data, user) {
    try {
        var percentOfMatching = 10;
        var usersCard = document.querySelector(".usersCard");
        if (!usersCard)
            throw new Error("coundnt find users ecard on DOM");
        if ((user.gender != data.gender) || (user.relationship != data.relationship))
            percentOfMatching = 1;
        if (data.gender == "all")
            percentOfMatching = 10;
        if ((user.height >= data.minHeight) && (user.height <= data.maxHeight))
            percentOfMatching += 15;
        if ((user.age >= data.minAge) && (user.age <= data.maxAge))
            percentOfMatching += 15;
        if (user.kids == data.kids)
            percentOfMatching += 15;
        if ((user.smoking == data.smoking) || (data.smoking == "sometime"))
            percentOfMatching += 10;
        if (user.education == data.education)
            percentOfMatching += 10;
        if (user.religious == data.religious)
            percentOfMatching += 15;
        if (user.job == data.job)
            percentOfMatching += 10;
        if ((percentOfMatching % 10 == 0) || (percentOfMatching % 10 == 5))
            usersCard.innerHTML += " <h4> Is a match? match of " + percentOfMatching + " </h4>\n                                <div class=\"userCard\">\n                                  <h3>Name:" + user.name + "</h3>\n                                  <p>Height: " + user.height + "</p>\n                                  <p>Age: " + user.age + "</p>\n                                  <p>Location: " + user.location + "</p>\n                                  <p>Job: " + user.job + "</p>\n                                  <p>Smoking: " + user.smoking + "</p>\n                                  <p>Kids: " + user.kids + "</p>\n                                  <p>Education: " + user.education + "</p>\n                                  <p>Religious level: " + user.religious + "</p>\n                                  <p>More about me: " + user.info + "</p>\n                                  <br>\n                                </div>";
    }
    catch (error) {
        console.error(error);
    }
}

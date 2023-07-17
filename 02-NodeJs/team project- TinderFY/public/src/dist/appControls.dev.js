"use strict";

// fetch all the info from the form
function createMyCard(event) {
  event.preventDefault();

  try {
    var name = event.target.elements.name.value;
    var age = event.target.elements.age.value;
    var gender = event.target.elements.gender.value;
    var location = event.target.elements.location.value;
    var height = event.target.elements.height.value;
    var weight = event.target.elements.weight.value;
    var kids = event.target.elements.kids.value;
    var intrested = event.target.elements.intrested.value;
    var info = event.target.elements.info.value;
    var userCard = {
      name: name,
      age: age,
      gender: gender,
      location: location,
      height: height,
      weight: weight,
      kids: kids,
      intrested: intrested,
      info: info
    };
    if (!userCard) throw new Error("cant find userCard Value's");
    fetch("/api/profileUser/newProfile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userCard)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      myPreferences();
    });
  } catch (error) {
    console.error(error);
  }
}

function createMyPrefferance(ev) {
  try {
    ev.preventDefault();
    console.log("dfsdfsdfsdf");
    var height = ev.target.elements.height.value;
    var bodytype = ev.target.elements.bodytype.value;
    var kids = ev.target.elements.kids.value;
    var smoking = ev.target.elements.smoking.value;
    var hangout = ev.target.elements.hangout.value;
    var education = ev.target.elements.education.value;
    var job = ev.target.elements.job.value;
    var relationship = ev.target.elements.relationship.value;
    var politics = ev.target.elements.politics.value;
    var religious = ev.target.elements.religious.value;
    var userPreffrance = {
      height: height,
      bodytype: bodytype,
      kids: kids,
      smoking: smoking,
      hangout: hangout,
      education: education,
      job: job,
      relationship: relationship,
      politics: politics,
      religious: religious
    };
    if (!userPreffrance) throw new Error("cant find user prefferance");
    fetch("/api/prefferanceUser/prefferance", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userPreffrance)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      console.log("signin lets go");
      window.location.href = "./index.html";
    });
  } catch (error) {}
}
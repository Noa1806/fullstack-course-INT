// fetch all the info from the for

function createMyCard(event: any) {
  event.preventDefault();

  try {
    const age = event.target.elements.age.value;
    const gender = event.target.elements.gender.value;
    const location = event.target.elements.location.value;
    const height = event.target.elements.height.value;
    const kids = event.target.elements.kids.value;
    const smoking = event.target.elements.smoking.value;
    const education = event.target.elements.education.value;
    const job = event.target.elements.job.value;
    const relationship = event.target.elements.relationship.value;
    const info = event.target.elements.info.value;
    const religious = event.target.elements.religious.value;

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');


    const userCard = {
      age,
      gender,
      location,
      height,
      kids,
      smoking,
      education,
      job,
      relationship,
      religious,
      info,
      email,
    };
    if (!userCard) throw new Error("cant find userCard Value's");

    fetch("/api/users/update", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        myPreferences()
      //  window.location.href = "./main.html?" + "email=" + email
      });
  } catch (error) {
    console.error(error);
  }
}




function createMyPrefferance(ev:any) {
  try {
    ev.preventDefault();
    console.log("createMyPrefferance");
    const elms = ev.target.elements;
    console.log(elms)

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const minHeight = elms.minimumHeight.value;
    const maxHeight = elms.maximumHeight.value;
    const minAge = elms.minimumAge.value;
    const maxAge = elms.maximumAge.value;
    const gender = elms.gender.value;
    const kids = elms.kids.value;
    const smoking = elms.smoking.value;
    const education = elms.education.value;
    const relationship = elms.relationship.value;
    const religious = elms.religious.value;
    
    const userPreffrance = {
      minHeight,
      maxHeight,
      minAge,
      maxAge,
      gender,
      kids,
      smoking,
      education,
      relationship,
      religious,
      email
    };

    console.log(userPreffrance);

    if (!userPreffrance) throw new Error("cant find user prefferance");

    fetch("/api/prefferanceUser/addPrefferance", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPreffrance),
    })
      .then((res) => {
        if (res.status === 409) {
        throw new Error("preferrance already exists");
      } else {
        res.json();
      }
    })
      .then((data) => {
        console.log(data);
        console.log("signin lets go");
        window.location.href = "login.html";
      });
  } catch (error) {
    console.error(error)
  }
}


function handlegetMyUser() {
  console.log("get user")
  try {
    fetch("/api/users/getusers")
      .then((res) => res.json())
      .then(({ users }) => {
        console.log(users)
      })


  } catch (error) {
    console.error(error)
  }
}


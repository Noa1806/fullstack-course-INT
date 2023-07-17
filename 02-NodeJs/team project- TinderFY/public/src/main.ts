import { User } from "../../API/users/usersModel";
import PrefferanceModel, { Prefferance } from "../../API/prefferanceUser/prefferanceModel";
import { json } from "stream/consumers";

function userProfileData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    fetch("/api/users/main", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        renderProfile(data["userCard"][0]);
      });

    console.log();
  } catch (error) {}

  function renderProfile(data: any) {
    const html = `
  <div class="mainNav">
    <nav class="navBar">
         <ul class="navBar__ul">
             <li class="navBar__ul__li" id="info">Info</li>
             <li class="navBar__ul__li" onclick="findMatch('${data.email}')">Find Match</li>
             <li class="navBar__ul__li">Messages</li>
             <li class="navBar__ul__li">Subscribe</li>
         </ul>
       </nav>  

  
        <div class="mainNav__userCard">
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/JenniferAnistonFeb09.jpg" alt="JenniferAniston pic" class="mainNav__userCard__img">
            <h2 class="mainNav__userCard__h2"  style="color: red;" id="h2User"></h2>
                <div class="edit" onclick="editUser()"></div>
                <div class="delete" onclick="deleteUser()"></div>
                <div class="imageUpload" onclick="imageUpload()"></div>
      </div>
         <div class="userProfileContainer">
            <p>Name:${data.name}</p>
            <p>Subscribed: ${data.subscribed}</p>
            <p>Age: ${data.age}</p>
            <p>Gender: ${data.gender}</p>
          </div>

  </div>
  
  <div class="usersCard">
  </div>`;

    const body = document.querySelector("body") as HTMLBodyElement;
    body.innerHTML = html;
  }
}

function findMatch(userEmail: string) {
  try {
    getUsers(userEmail);
  } catch (error) {
    console.error(error);
  }
  
}

function getUsers(userEmail:string) {
  try {
    fetch("/api/users/getusers")
      .then((res) => res.json())
      .then(({ users }) => {
        try {
          if (!users) throw new Error("didnt find users");
          renderUsers(users,userEmail);
        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

function renderUsers(users: Array<User>,userEmail:string) {
  try {
    if (!users) throw new Error("No users");
    const usersCard = document.querySelector(".usersCard");
    if (!usersCard) throw new Error("coundnt find users ecard on DOM");
    users.map((user) => {
        if (
          user.email != userEmail
        ) getPrefferance(user,userEmail)
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
      })
  } catch (error) {
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

function getPrefferance(user:User, userEmail:string){
  try {
    fetch("/api/prefferanceUser/get-user-prefferance",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) throw new Error("coundnt find prefferance for this user");
        matchingPercent(data["userPrefferance"],user);
      })
    ;
  } catch (error) {
    console.error(error);
  }
}

function matchingPercent(data:any, user:User) {

  try {
      
      var percentOfMatching:number =10;
      
      const usersCard = document.querySelector(".usersCard");
      if (!usersCard) 
      throw new Error("coundnt find users ecard on DOM");
      if ((user.gender!= data.gender) || (user.relationship != data.relationship))
        percentOfMatching=1;
      if(data.gender=="all")
        percentOfMatching=10;
      if ((user.height >= data.minHeight) && (user.height<= data.maxHeight))
        percentOfMatching+=15;
      if ((user.age >= data.minAge) && (user.age <= data.maxAge))
        percentOfMatching+=15;
      if (user.kids == data.kids)
        percentOfMatching+=15;  
      if ((user.smoking == data.smoking) || (data.smoking=="sometime"))
        percentOfMatching+=10;
      if (user.education == data.education)
        percentOfMatching+=10;
      if (user.religious == data.religious)
        percentOfMatching+=15; 
      if (user.job == data.job)
        percentOfMatching+=10; 
       
        if ((percentOfMatching%10==0) || (percentOfMatching%10==5))
       usersCard.innerHTML += ` <h4> Is a match? match of ${percentOfMatching} </h4>
                                <div class="userCard">
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
  
  }
    catch (error) {
    console.error(error);
  }
  
}


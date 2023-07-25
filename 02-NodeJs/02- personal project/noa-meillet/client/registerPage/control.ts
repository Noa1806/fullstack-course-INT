function createUser(ev: any) {
  try {
    ev.preventDefault();
    const nameOfBride = ev.target.elements.nameOfBride.value;
    if (!nameOfBride) throw new Error("No name of bride");
    const nameOfGroom = ev.target.elements.nameOfGroom.value;
    if (!nameOfGroom) throw new Error("No name of groom");
    const weddingDate = ev.target.elements.weddingDate.value;
    if (!weddingDate) throw new Error("No wedding date");
    const username = ev.target.elements.username.value;
    if (!username) throw new Error("No usrname");
    const password = ev.target.elements.password.value;
    if (!password) throw new Error("No Password");

    const user = {
      nameOfBride,
      nameOfGroom,
      weddingDate,
      username,
      password,
    };
    console.log(user);

    //send to server:
    fetch("/api/users/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
          res.json();
          if (!registerPage) throw new Error("register page element is not found");
        registerPage.html = `<div class="register-complete--msg">
        <h3>Congragulation!</h3>
        <h4>We created your account</h4>
        <button onclick="showLoginPage()" class="btn">LogIn</button>
        </div>`;
      })
    
  } catch (error) {
    console.error('error- can not create user');
  }
}

  function showLoginPage() {
    try {
      window.location.href = "../loginPage/index.html";
    } catch (error) {
      console.error(`The login page is not found`);
    }
  }


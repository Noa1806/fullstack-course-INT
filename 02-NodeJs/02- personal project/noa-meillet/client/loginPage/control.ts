function createUser(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const nameOfBride = ev.target.elements.nameOfBride.value;
      const nameOfGroom = ev.target.elements.nameOfGroom.value;
      const weddingDate = ev.target.elements.weddingDate.value;
      const username = ev.target.elements.username.value;
      const password = ev.target.elements.password.value;
      
      const newUser: any = { nameOfBride, nameOfGroom, weddingDate, username, password };
  
      //send to server:
      fetch("/api/users/add-user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  function showSignInForm() {
    try {
      if (!loginForm) throw new Error(`We don't have any element to add your user`);
      loginForm.innerHTML = `
        <h3>Log In To Your Personal Wedding Planner:</h3>
        <form class="sign-in-form" onsubmit="login(event)">
        <input type="text" name="username" class="input" placeholder="Username..." required/>
        <br />
        <input type="password" name="password" class="input" placeholder="Password..." required/>
        <br />
        <input type="submit" id="sign_in_btn" value="Sign In"/>
        </form>
    `;
    } catch (error) {
      console.error(`The form to login have a problem`);
    }
  }
  
  function login(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const username = ev.target.elements.username.value;
      const password = ev.target.elements.password.value;
      const user: any = { username, password };
  
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  
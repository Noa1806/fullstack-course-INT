
// the register function
function handleRegister(event: any) {
  event.preventDefault()
  try {
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const userLogin = { name, email, password }
    if (!name) throw new Error("Name Requierd")
    if (!email) throw new Error("cant find user email")
    if (!password) throw new Error("cant find user password")


    fetch("/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => {
        console.log(res)
        if (res.status === 409) {
          alert("user already exists")
          throw new Error("user already exists");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        window.location.href = "app.html?" + "email=" + email
      })

  } catch (error) {
    console.error(error)
  }

}


// the sign - in

function handleLogin(event: any) {
  event.preventDefault()
  try {
    const email = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    const userLogin = { email, password }
    const htmlEror = document.querySelector("#error") as HTMLHeadElement;
    if (!email) throw new Error("user name is not valid");
    if (!password) throw new Error("cant find user password")


    fetch("/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => {
        console.log(res)
        if (res.status === 401) {
          alert("email/password incorrect")
          throw new Error("email/password incorrect");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
          
        window.location.href = "./main.html?" + "email=" + email
      })

  } catch (error) {
    console.error(error)
  }



  // the sign - in

  function handleLogin(event: any) {
    event.preventDefault()
    try {
      const name = event.target.elements.name.value;
      const password = event.target.elements.password.value;
      const userLogin = { name, password }
      const htmlEror = document.querySelector("#error") as HTMLHeadElement;
      if (!name) throw new Error("user name is not valid"); {

        htmlEror.innerHTML = "Name or Password incorrect"
      }

      if (!password) throw new Error("cant find user password")


      fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.href = "main.html"


        })

    } catch (error) {
      console.error(error)
    }

  }
}

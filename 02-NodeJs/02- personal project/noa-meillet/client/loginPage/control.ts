function showRegisterForm() {
  try {
    window.location.href= "../registerPage/register.html"
    } catch (error) {
    console.error(`The register page is not found`);
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

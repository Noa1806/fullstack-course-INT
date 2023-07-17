// the sign in function
function myLogin() {

  const html = `
   
    <div class="wrapper">
    <div class="wrapper__info"></div>
  <div class="container">
    <div class="container__form">
        <div class="container__form__SignIn">
  
        <button class="container__form__SignIn__btnsign" id="btnsign" onclick="moveToRegister()">Register</button></div>
  
        <form onsubmit= "handleLogin(event)" class="registerForm"> 
        <h2 class="registerForm__h2">Sign In Here</h2>
        <label class="registerForm__label" for="name">Email:</label>
        <input class="registerForm__input"  type="text" name="name" placeholder="enter name">
         <label class="registerForm__label"  for="password">Password:</label>
            <input class="registerForm__input" type="password" name="password" placeholder="enter password">
            <br>
                <button class="registerForm__btn" type="submit">Sign-In</button>
                </form>
                <div class="container__forminfo"> <h1 id
                ="error"></h1>
                </div>
</div>

    `
  const body = document.querySelector("body") as HTMLBodyElement;
  body.innerHTML = html

}


function moveToRegister() {

  window.location.href = "index.html"
}

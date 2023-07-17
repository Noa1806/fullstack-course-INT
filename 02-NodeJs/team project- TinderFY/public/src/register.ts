// creat the form for register + option to change to sign in only
function handleCreatMyForm(){
  
  const html = `
  
  <div class="wrapper">
  <div class="wrapper__info"></div>
<div class="container">
  <div class="container__form">
      <div class="container__form__SignIn">

      <button class="container__form__SignIn__btnsign" id="btnsign" onclick="handleSignIn()">sign-in</button></div>
      
      <form onsubmit= "handleRegister(event)" class="registerForm"> 
      <h2 class="registerForm__h2">Register Here</h2>
      <label class="registerForm__label" for="name">Name:</label>
      <input class="registerForm__input"  type="text" name="name" placeholder="enter name">
      <label class="registerForm__label"  for="email">Email:</label>
     <input class="registerForm__input" type="email" name="email" placeholder="enter email">
      <label class="registerForm__label"  for="password">Password:</label>
          <input class="registerForm__input" type="password" name="password" placeholder="enter password">
          <br>
              <button class="registerForm__btn" type="submit">Register</button>
              </form>
  </div>
            <div class="container__forminfo">
            <h1 class="container__forminfo__h1">Tinder<span>FY</span></h1>
              <h2 class="container__forminfo__h2">Still alone? no worry! <br>here you can find what you looking for.</br></h2>
              <h4 class="container__forminfo__h4">*Consider our sub for 100% chance, you wont stay alone tonight!</h4>
            </div>
</div>
</div>
    `
    const body = document.querySelector("body")as HTMLBodyElement;
    body.innerHTML = html;
}

function handleSignIn(){
  window.location.href = "login.html"
}

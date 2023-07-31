// the sign in function
function myLogin() {
    var html = "\n   \n    <div class=\"wrapper\">\n    <div class=\"wrapper__info\"></div>\n  <div class=\"container\">\n    <div class=\"container__form\">\n        <div class=\"container__form__SignIn\">\n  \n        <button class=\"container__form__SignIn__btnsign\" id=\"btnsign\" onclick=\"moveToRegister()\">Register</button></div>\n  \n        <form onsubmit= \"handleLogin(event)\" class=\"registerForm\"> \n        <h2 class=\"registerForm__h2\">Sign In Here</h2>\n        <label class=\"registerForm__label\" for=\"name\">Email:</label>\n        <input class=\"registerForm__input\"  type=\"text\" name=\"name\" placeholder=\"enter name\">\n         <label class=\"registerForm__label\"  for=\"password\">Password:</label>\n            <input class=\"registerForm__input\" type=\"password\" name=\"password\" placeholder=\"enter password\">\n            <br>\n                <button class=\"registerForm__btn\" type=\"submit\">Sign-In</button>\n                </form>\n                <div class=\"container__forminfo\"> <h1 id\n                =\"error\"></h1>\n                </div>\n</div>\n\n    ";
    var body = document.querySelector("body");
    body.innerHTML = html;
}
function moveToRegister() {
    window.location.href = "index.html";
}

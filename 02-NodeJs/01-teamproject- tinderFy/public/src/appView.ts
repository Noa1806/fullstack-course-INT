function creatProfile() {
  try {
    
    const userProfile = document.querySelector(
      ".userProfile"
    ) as HTMLDivElement | null;
    if (userProfile) userProfile.innerHTML = `
        <div class="main">
        <h2 class="main__h2">welcome <span class="main__h2__span"></span></h2>
        <h3 class="main__h3">lets create your profile</h3>
        <form class="profileForm" onsubmit="createMyCard(event)">

        
         <label class="label" for="age">what is your age:</label> 
         <br>
         <input class="input" type="number" name="age">  
         <br>

         <label class="label" for="gender">whats your gender:</label>
         <br>
         <input class="inputRadio" type="radio" name="gender" value="man">man
         <input class="inputRadio" type="radio" name="gender" value="women">women
         <input class="inputRadio" type="radio" name="gender" value="other">other
         <br>

           <label class="label" for="location">where do you live:</label>
           <br>
           <input class="input" type="text" name="location">
           <br>

            <label class="label" for="height">what is your heght:</label>
            <br>
            <input class="input" type="number" name="height">
            <br>

            <label class="label" for="kids">do you want kids:</label>
            <br>
            <input class="inputRadio" type="radio" name="kids" value="yes">yes
            <input class="inputRadio" type="radio" name="kids" value="not now">not now
            <input class="inputRadio" type="radio" name="kids" value="never">never
            <br>

            <label class="label" for="smoking">are you smoking:</label>
            <br>
            <input class="inputRadio" type="radio" name="smoking" value="yes">yes
            <input class="inputRadio" type="radio" name="smoking" value="no">no 
            <br>

            <label class="label" for="education">Education:</label>
          <br>
          <input class="inputRadio" type="radio" name="education" value="high school">high school
          <input class="inputRadio" type="radio" name="education" value="university">University 
          <input class="inputRadio" type="radio" name="education" value="didnt study">didnt study
          <br>

          <label class="label" for="job"> Job:</label>
          <br>
          <input class="inputRadio" type="radio" name="job" value="yes">yes
          <input class="inputRadio" type="radio" name="job" value="no">No
          <input class="inputRadio" type="radio" name="job" value="between">Between Jobs
          <br>

          <label class="label" for="relationship">The type of relationship:</label>
          <br>
          <input class="inputRadio" type="radio" name="relationship" value="love">looking for love
          <input class="inputRadio" type="radio" name="relationship" value="affair">Looking for an affair
          <input class="inputRadio" type="radio" name="relationship" value="Friendship">Friendship
          <br>

            <label class="label" for="yourself">few words about yourself:</label>
              <br>
              <textarea name="info" id="" cols="30" rows="10"></textarea>
              <br>

              <label class="label" for="religious">Religious belief:</label>
              <br>
              <input class="inputRadio" type="radio" name="religious" value="religious">religious
              <input class="inputRadio" type="radio" name="religious" value="secular">secular
              <input class="inputRadio" type="radio" name="religious" value="traditional">traditional
              <br>

              <button id="btnCreatProfile" type="submit">creat-profile</button>
        </form>
        </div>
        `;
    // profileHtml;
  } catch (error) {
    console.error(error);
  }
}

function myPreferences() {
  try {
    const userProfile = document.querySelector(
      ".userProfile"
    ) as HTMLDivElement | null;
    const myPreferences = `
        <div>
        <h2>Now we will ask you about your preferences</h2>
        <h3>Your preferences will affect the adjustments you receive</h3>
        <form onsubmit="createMyPrefferance(event)">
        
        <label class="label" for="gender">gender:</label>
        <br>
        <input class="inputRadio" type="radio" name="gender" value="man">man
        <input class="inputRadio" type="radio" name="gender" value="women">women
        <input class="inputRadio" type="radio" name="gender" value="all">other
        <br>
        
          <label class="label" for="minimumHeight">minimum height:</label>
          <br>
         <input class="input" type="number" name="minimumHeight">  
         <br>

         <label class="label" for="maximumHeight">maximum height:</label>
         <br>
        <input class="input" type="number" name="maximumHeight">  
        <br>

        <label class="label" for="minimumAge">minimum age:</label>
        <br>
       <input class="input" type="number" name="minimumAge">  
       <br>

       <label class="label" for="maximumAge">maximum age:</label>
          <br>
         <input class="input" type="number" name="maximumAge">  
         <br>

          <label class="label" for="kids">intrested in kids:</label>
          <br>
          <input class="inputRadio" type="radio" name="kids" vlaue="yes">yes
          <input class="inputRadio" type="radio" name="kids" vlaue="not now">not now
          <input class="inputRadio" type="radio" name="kids" vlaue="never">never
          <br>

          <label class="label" for="smoking">Smoking:</label>
          <br>
          <input class="inputRadio" type="radio" name="smoking" value="no">No
          <input class="inputRadio" type="radio" name="smoking" value="yes">Yes
          <input class="inputRadio" type="radio" name="smoking" value="sometimes">Sometime
          <br>

          <label class="label" for="education">Education:</label>
          <br>
          <input class="inputRadio" type="radio" name="education" value="high school">high school
          <input class="inputRadio" type="radio" name="education" value="University">University 
          <input class="inputRadio" type="radio" name="education" value="didnt study">didnt study
          <br>

          <label class="label" for="relationship">The type of relationship:</label>
          <br>
          <input class="inputRadio" type="radio" name="relationship" value="love">looking for love
          <input class="inputRadio" type="radio" name="relationship" value="affair">Looking for an affair
          <input class="inputRadio" type="radio" name="relationship" value="Friendship">Friendship
          <br>

          <label class="label" for="religious">Religious belief:</label>
          <br>
          <input class="inputRadio" type="radio" name="religious" value="religious">religious
          <input class="inputRadio" type="radio" name="religious" value="secular">secular
          <input class="inputRadio" type="radio" name="religious" value="traditional">traditional
          <br>
          <button type="submit">create</button>
        </form>
    </div>
    `;
    if (userProfile) userProfile.innerHTML = myPreferences;
  } catch (error) {
    console.error(error);
  }
}

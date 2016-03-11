  $(function() {
    $(".longestWord").on("click", function() {
        var word = prompt("Enter a string of at least 5 words separated by spaces:") ;
        var str = word.split(" ");
        var longest = 0;
        var str = word.split(" ");
        var longest = 0;
        str.forEach(function(str) {
          if (longest < str.length) {
            longest = str.length;
            word = str;
          }
        });
    alert("The longest word is " + word + "!");
    });
      $("#blue-box").on("click", function() {
        $("#blue-box").addClass("greenify");
        setTimeout(function() {
          $("#blue-box").removeClass("greenify");
        }, 5000)
      })
          $(function() {
    /**** YOU MAY MODIFY THE CODE BELOW ****/

    $('#theForm').submit(function(event){
      return validateForm();
    });

    function validateForm(){
      var isValid = true;
      var nameValid = $('#name').val();
      var phoneValid = $('#phone').val();
      var emailValid = $('#email').val();
      var provinceValid = $('#state').val();

      if (nameValid.match(/^[A-Za-z]{5,}$/)){
        $("input#name").removeClass('infoErr');
      }
      else{
        $("input#name").addClass('infoErr');
        alert("your name must be at least 5 letters!")
        isValid = false;
      }
      if (emailValid.match(/@{1}/)){
        $("input#email").removeClass('infoErr');
      }
      else {
        $("input#email").addClass('infoErr');
        alert("your email must have an @ symbol")
        isValid = false;
      }
      if (phoneValid.match(/^[0-9]{7,}$/)){
        $("input#phone").removeClass('infoErr');
      }
      else {
        $("input#phone").addClass('infoErr');
        alert("your phonenumber must have at least 7 digits!")
        isValid = false;
      }
      if (provinceValid.match(/^[A-Z]{2}$/)){
        $("input#state").removeClass('infoErr');
      }
      else{
        $("input#state").addClass('infoErr');
        alert("your province/state must be 2 uppercase letters!")
        isValid = false;
      }
      return isValid;
     };
    /**** STOP MODIFYING HERE. ****/
  });
      $(".mybtn").on("click", function() {
        var text = prompt("enter your name");
        var random = Math.floor((Math.random() * 10) + 1);
        // var text = String(texts[textNumber]);
        if (text == '33') {
          window.scrollTo(0, 0);
          alert("you guessed my secret code" + text+"!" + "I moved you to the top of the page as a reward");
        }
        console.log(random);
        if (random == 1) {
          alert("you have clicked the button"
          + " " + text);
        }
        else if (random ==2) {
          alert("have a nice day"
          + " " + text);
        }
        else if (random ==3) {
          alert("get shwifty"
           + " " + text+ "!");
        }
        else if (random ==4) {
          alert("SHOW ME WHAT YOU GOT"
          + " " + text+ "!");
        }
        else if (random ==5) {
          alert("do you ever got bored of this thing"
          + " " + text+ "?");
        }
        else if (random ==6) {
          alert("I baited you into clicking this"
          + " " + text+ "!");
        }
       else if (random ==7) {
        alert("you are a smart guy"
        + " " + text+ "!");
        }
        else if (random ==8) {
          alert("you are a dumb guy"
          + " " + text+ "!");
        }
        else if (random ==9) {
          alert("if you guess 33 something cool will happen"
          + " " + text+ "!");
        }
      else if (random == 10) {
        alert("try again..."
          + " " + text);
      }
    });
  });
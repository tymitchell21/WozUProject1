function idCard () {
  
  //Takes value from inputs and puts them into variable
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  
  //Posts these values to <p> tags in html
  document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;
  
  //Takes value from inputs and puts into variables
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
  
  //creates array and puts variables into it
  var numberArray = [];
  numberArray.push(age,phoneNumber);
  
  //loops through array and adds values to <p>
  for (i=0; i<numberArray.length; i++) {
    if (numberArray[i]<=100) {
      document.getElementById("postAge").innerHTML = "Age: " + numberArray[i];
    }
    else {
      document.getElementById("postPhoneNumber").innerHTML = "Age: " + numberArray[i];
    }
  }
  
}
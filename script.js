document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var imageLink = document.getElementById("imageLink").value;
  var interests = [];
  var checkboxes = document.querySelectorAll('input[name="interests"]:checked');
  checkboxes.forEach(function (checkbox) {
    interests.push(checkbox.value);
  });
  var gender = document.getElementById("gender").value;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h3 style='color: green'>Registration Successful!</h3>";
  resultDiv.innerHTML += "<p><strong>Full Name:</strong> " + fullName + "</p>";
  resultDiv.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
  resultDiv.innerHTML += "<p><strong>Password:</strong> " + password + "</p>";
  resultDiv.innerHTML += "<p><strong>Interests:</strong> " + interests.join(', ') + "</p>";
  resultDiv.innerHTML += "<p><strong>Gender:</strong> " + gender + "</p>";
  resultDiv.innerHTML += "<p><img src='" + imageLink + "' alt='User Image' style='width:250px ; height: 250px ; border: none ; border-radius: 10px'></p>";
});

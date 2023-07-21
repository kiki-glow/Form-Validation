
function validateForm() {
    // Get form inputs
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    // Reset previous error messages
    const errorMessages = document.getElementsByClassName('error');
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerHTML = '';
    }

    // Perform validation checks
    if (fname === '') {
        document.getElementById('fname-error').innerHTML = 'Please enter your first name.';
        return false;
    }

    if (!validateName(fname)) {
        document.getElementById('fname-error').innerHTML = 'Please enter a valid name (only letters allowed).';
        return false;
    }

    if (lname === '') {
        document.getElementById('lname-error').innerHTML = 'Please enter your last name.';
        return false;
    }

    if (!validateName(lname)) {
        document.getElementById('lname-error').innerHTML = 'Please enter a valid name (only letters allowed).';
        return false;
    }

    if (name === '') {
      document.getElementById('name-error').innerHTML = 'Please enter your username.';
      return false;
    }

    if (email === '') {
      document.getElementById('email-error').innerHTML = 'Please enter your email.';
      return false;
    }

    if (!validateEmail(email)) {
      document.getElementById('email-error').innerHTML = 'Please enter a valid email address.';
      return false;
    }

    if (password === '') {
      document.getElementById('password-error').innerHTML = 'Please enter your password.';
      return false;
    }

    let regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/; // Regex for special characters
    if (!regex.test(password)) {
      document.getElementById('password-error').innerHTML = 'Password should contain at least one special character.';
      return false;
    }

    if (password.length < 8) {
      document.getElementById('password-error').innerHTML = 'Password must be at least 8 characters long.';
      return false;
    }

    if (password2 !== password) {
      document.getElementById('password-error').innerHTML = "Passwords doesn't match!";
      return false;
    }

    // Additional validation checks can be added here...

    // If all checks pass, allow form submission
    return true;
  }

  function validateName(fname) {
    let re = /^[A-Za-z]+$/;
    return re.test(fname);
  }

  function validateName(lname) {
    let re = /^[A-Za-z]+$/;
    return re.test(lname);
  }

  function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    var password = document.getElementById("password").value;
    let regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/; // Regex for special characters
    if (!regex.test(password)) {
      alert("Password should contain at least one special character.");
      return false;
    }
  }
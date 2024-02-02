document.getElementById('myForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    
    if (name === '') {
      nameError.textContent = 'Name is required';
      event.preventDefault();
      
    }
    
    if (email === '') {
      emailError.textContent = 'Email is required';
      event.preventDefault();
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Invalid email format';
      event.preventDefault();
    }
    
    if (password === '') {
      passwordError.textContent = 'Password is required';
      event.preventDefault();
    } else if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long';
      event.preventDefault();
    }
  });
  
  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
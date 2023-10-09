// Create a function to sign up a new user.
async function signup(name, email, password) {
    // Make a POST request to your backend API to create a new user.
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  
    // Check the response status code. If it is 201, then the user was created successfully.
    if (response.status === 201) {
      // Do something to indicate to the user that they were created successfully.
    } else {
      // Handle the error.
    }
  }
  
  // Create a function to log in a user.
  async function login(email, password) {
    // Make a POST request to your backend API to log in the user.
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  
    // Check the response status code. If it is 200, then the user was logged in successfully.
    if (response.status === 200) {
      // Do something to indicate to the user that they were logged in successfully.
    } else {
      // Handle the error.
    }
  }
  
  // Add event listeners to the signup and login buttons.
  document.querySelector('#signup-btn').addEventListener('click', async () => {
    // Get the user's input.
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    // Call the signup function.
    await signup(name, email, password);
  });
  
  document.querySelector('#login-btn').addEventListener('click', async () => {
    // Get the user's input.
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    // Call the login function.
    await login(email, password);
  });
  
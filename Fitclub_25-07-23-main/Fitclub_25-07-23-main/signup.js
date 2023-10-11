function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userId = user.uid;
        
        // Store additional user data in the Firebase Realtime Database
        const userData = {
          fullName: document.getElementById('name').value,
          phoneNumber: document.getElementById('number').value,
        };
  
        // Set user data under a "users" node with the user's UID
        database.ref('users/' + userId).set(userData)
          .then(() => {
            alert('Sign up successful!');
            // Redirect to a new page or perform other actions as needed
          })
          .catch((error) => {
            console.error('Error writing user data:', error);
          });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  }
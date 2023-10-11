// // Create a function to sign up a new user.
// async function signup(name, email, password) {
//     // Make a POST request to your backend API to create a new user.
//     const response = await fetch('/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//       }),
//     });
  
//     // Check the response status code. If it is 201, then the user was created successfully.
//     if (response.status === 201) {
//       // Do something to indicate to the user that they were created successfully.
//     } else {
//       // Handle the error.
//     }
//   }
  
//   // Create a function to log in a user.
//   async function login(email, password) {
//     // Make a POST request to your backend API to log in the user.
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
  
//     // Check the response status code. If it is 200, then the user was logged in successfully.
//     if (response.status === 200) {
//       // Do something to indicate to the user that they were logged in successfully.
//     } else {
//       // Handle the error.
//     }
//   }
  
//   // Add event listeners to the signup and login buttons.
//   document.querySelector('#signup-btn').addEventListener('click', async () => {
//     // Get the user's input.
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
  
//     // Call the signup function.
//     await signup(name, email, password);
//   });
  
//   document.querySelector('#login-btn').addEventListener('click', async () => {
//     // Get the user's input.
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
  
//     // Call the login function.
//     await login(email, password);
//   });
  

// const firebaseConfig = {
//   apiKey: "AIzaSyBM4SguUrIWKDh0NlVTd8UuXVmgjuKj6r8",
//   authDomain: "gym-sahil-408fd.firebaseapp.com",
//   projectId: "gym-sahil-408fd",
//   storageBucket: "gym-sahil-408fd.appspot.com",
//   messagingSenderId: "1074347404847",
//   appId: "1:1074347404847:web:4a088b1ea7bd863efba0da"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const database = firebase.database()

// function login(){
//   email = document.getElementById('email').value
//   password = document.getElementById('password').value

//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('fuck')
//     return
//   }

//   if (validate_field(email) == false || validate_field(password) == false) {
//     alert('Somethings not right')
//     return
//   }
// }

// auth.createUserWithEmailAndPassword(email, password)
// .then(function() {
//   var user = auth.currentUser
//   var database_ref = database.ref()
//   var user_data = {
//     email: email,
//     password: password
//   }
//   database_ref.child('users/' + user.uid).set(user_data)

//   alert('Success')

// })
// .catch(function(error) {
//   var error_code = error.code
//   var error_message = error.message
//   alert(error_message)
// })

// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/
//   if(expression.test(email) == true) {
//     return true
//   } else {
//     return false
//   }
// }

// function validate_password(password) {
//   if(password < 6){
//     return false
//   } else {
//     return true
//   }
// }

// function validate_field(field) {
//   if (field == null) {
//     return false
//   }

//   if (field.length <= 0) {
//     return false
//   } else {
//     return true
//   }
// }


const firebaseConfig = {
  apiKey: "AIzaSyBM4SguUrIWKDh0NlVTd8UuXVmgjuKj6r8",
  authDomain: "gym-sahil-408fd.firebaseapp.com",
  projectId: "gym-sahil-408fd",
  storageBucket: "gym-sahil-408fd.appspot.com",
  messagingSenderId: "1074347404847",
  appId: "1:1074347404847:web:4a088b1ea7bd863efba0da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const database = firebase.database();

// function login() {
//   email = document.getElementById('email').value;
//   password = document.getElementById('password').value;

//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('Invalid email or password');
//     return;
//   }

//   if (validate_field(email) == false || validate_field(password) == false) {
//     alert('Something is not right');
//     return;
//   }

//   // Create a new user and add data to the database
//   auth.createUserWithEmailAndPassword(email, password)
//     .then(function () {
//       var user = auth.currentUser;
//       var database_ref = database.ref();
//       var user_data = {
//         email: email,
//         password: password
//       };
//       database_ref.child('users/' + user.uid).set(user_data);

//       alert('Success');
//     })
//     .catch(function (error) {
//       var error_code = error.code;
//       var error_message = error.message;
//       alert(error_message);
//     });
// }

// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/;
//   return expression.test(email);
// }

// function validate_password(password) {
//   return password.length >= 6;
// }

// function validate_field(field) {
//   return field != null && field.length > 0;
// }


const auth = firebase.auth();
const database = firebase.database();

// function login() {
//   email = document.getElementById('email').value;
//   password = document.getElementById('password').value;

//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('Invalid email or password');
//     return;
//   }

//   if (validate_field(email) == false || validate_field(password) == false) {
//     alert('Something is not right');
//     return;
//   }

//   // Create a new user and add data to the database
//   auth.createUserWithEmailAndPassword(email, password)
//     .then(function () {
//       var user = auth.currentUser;
//       if (user) {
//         var database_ref = database.ref();
//         var user_data = {
//           email: email,
//           password: password
//         };
//         database_ref.child('users/' + user.uid).set(user_data)
//           .then(function () {
//             alert('Data added to the database successfully.');
//           })
//           .catch(function (dbError) {
//             console.error('Error adding data to the database:', dbError);
//             alert('Error adding data to the database. Please try again later.');
//           });
//       } else {
//         alert('User not authenticated.');
//       }
//     })
//     .catch(function (authError) {
//       console.error('Authentication error:', authError);
//       alert('Authentication error. Please try again later.');
//     });
// }

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User logged in successfully
      alert('Login successful!');
      // Redirect to a new page or perform other actions as needed
    })
    .catch((error) => {
      console.error('Error signing in:', error);
      // Handle login failure (e.g., display an error message)
    });
}
function createLoginTracker(userInfo) {
  // Count failed attempts
  let attemptCount = 0;
  // Function to check the password
  const loginAttempt = (passwordAttempt) => {
   // If 3 or more failed attempts - account is locked
   if (attemptCount >= 3) {
    return "Account is locked due to too many failed login attempts";
   }
   // If password is correct
   if (passwordAttempt === userInfo.password) {
    return "Login successful"
   }
   // If password is wrong - add one attempt
   attemptCount++;
   // If now 3 or more attempts - lock the account
   if (attemptCount >= 3) {
    return "Account is locked due to too many failed login attempts"; 
   }
   // Show fail message with attempt number
   return "Attempt " + attemptCount + ": Login failed" ;
  };
    // Return the inner login function
    return loginAttempt;
}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

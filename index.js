function createLoginTracker(userInfo) {
  // Count login tries
  let attemptCount = 0;
   // Function to check password
   const loginAttempt = (passwordAttempt) => {
    // Lock after 3 tries
    if (attemptCount >= 3) {
      return "Account is locked due to too many failed login attempts";
    }
    // Add 1 try
    attemptCount++;
    // If password is correct
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      // If password is wrong
      return "Login failed. Attempt " + attemptCount;
    }
    } ;
    // Return this function
    return loginAttempt;
  }
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

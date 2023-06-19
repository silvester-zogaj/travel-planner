export const getErrorMessage = (authCode: string) => {
  switch (authCode) {
    case "auth/wrong-password":
    case "auth/missing-password":
      return "Invalid password";
    case "auth/invalid-email":
    case "auth/user-not-found":
      return "Invalid email";
    case "auth/email-already-in-use":
      return "Email already in use";
    case "auth/too-many-requests":
      return "Too many sign in attempts. Please try again later";
    default:
      return `Unknown error ${authCode}`;
  }
};

export const validateLogin = ({ username, password }) => {
  const errors = {};

  if (!username.trim()) {
    errors.username = "Username is required";
  }

  if (!password || password.length < 4) {
    errors.password = "Password must be at least 4 characters";
  }

  return errors;
};

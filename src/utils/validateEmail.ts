const validateEmail = (email: string) => {
  // Simple email regex pattern, you can use a more complex one if needed
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default validateEmail;

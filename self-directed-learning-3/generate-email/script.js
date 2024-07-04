function generateEmail(user) {
  // Access firstName and lastName properties
  const firstName = user.firstName.toLowerCase();
  const lastName = user.lastName.toLowerCase();

  // Concatenate and form the email address
  const email = `${firstName}.${lastName}@example.com`;

  // Return the resulting email address
  return email;
}

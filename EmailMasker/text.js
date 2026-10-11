function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  let maskedUsername =
    username[0] + "*".repeat(username.length - 2) + username[username.length - 1];

  return maskedUsername + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));
const checkUsername = (username) => {
  /*
    Regex explanation 
    ^ means start of the string
    \D means anything but Not a digital MEANS [^0-9]  \d (digit), \D (non-digit), \
    \w anything that is a alphanumeric character means[a-zA-Z0-9]
    {2,}  --> 2 or more chars no limit
     can go to regex101.com to check
   */
  let usernameChecker = /^\D\w{2,}$/;
  return usernameChecker.test(username);
};

/*
begins with a character ([a-zA-Z])
3 or more alphanumeric characters.
 8 or more characters AND contains at least 
1 upper case letter AND 1 number and 1 of the following special
 characters ( / * - + ! @ 
# $ ^ & * ).
*/
const checkPassword = (password) => {
  let passwordChecker = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){4,20}/;
  return passwordChecker.test(password);
};

// const checkEmail = (email) => {
//   let emailChecker = / ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

//   return emailChecker.test(email);
// };

const registerValidator = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let cpassword = req.body.cpassword;
  if (!checkUsername(username)) {
    req.flash("error", "invalid username!!!");
    req.session.save((err) => {
      res.redirect("/registration");
    });
  } else if (!checkPassword(password)) {
    req.flash("error", "invalid password!!!");
    req.session.save((err) => {
      res.redirect("/registration");
    });
  } else {
    next();
  }
};

const loginValidator = (req, res, next) => {};

module.exports = { registerValidator, loginValidator };

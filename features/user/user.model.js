export default class UserModel {
  constructor(Name, Email, Password) {
    (this.Name = Name), (this.Email = Email), (this.Password = Password);
  }
  //HANDING USER REGISTRATION REQUESTS
  addNewUser(userObj) {
    const { Name, Email, Password } = userObj;
    //CHECKING IF THE USER IS ALREADY REGISTRED
    const isUserExist = userModelArray.find((u) => {
      return u.Email == Email;
    });
    if (isUserExist) {
      //IF USER IS ALREADY REGISTRED THEN RETURN
      return null;
    }
    //IF THE USER DOES NOT EXIST MAKE AN USER OBJECT AND PUSH IT IN THE [userModelArray] AND RETURN THE NEW USER
    const newUser = new UserModel(Name, Email, Password);
    newUser.UserID = userModelArray.length + 1;
    userModelArray.push(newUser);
    return newUser;
  }
  //HANDLING USER LOG IN REQUESTS
  confirmUser(userObj) {
    //CHECKING IF THE USER IS REGISTERED OR NOT
    const { Email, Password } = userObj;
    const user = userModelArray.find((u) => {
      return u.Email == Email && u.Password == Password;
    });
    //IF USER DOES NOT PRESENT
    if (!user) {
      return null;
    }
    //IF USER IS REGISTERED THEN SEND THE USER OBJECT
    return user;
  }
}
const userModelArray = [
  {
    Name: "prateek",
    Email: "prateek@gmail.com",
    UserID: 1,
    Password: "password1",
  },
  {
    Name: "sarthak",
    Email: "sarthak@gmail.com",
    UserID: 2,
    Password: "password2",
  },
];
